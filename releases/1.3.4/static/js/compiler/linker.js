"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const { _builtinLibs } = require("repl");
const crypto = require("crypto");
const ts = require("typescript");
const terser = require("terser");
const combine = require("combine-source-map");
const convert = require("convert-source-map");
const sys_1 = require("./sys");
const preludes = require("./prelude");
const transforms = require("./transforms");
const cache_version = 1;
function* imap(iter, fn) {
    let i = 0;
    for (const item of iter) {
        yield fn(item, i++);
    }
}
exports.imap = imap;
const to_obj = (map) => {
    const obj = Object.create(null);
    for (const [key, val] of map) {
        obj[key] = val;
    }
    return obj;
};
const dense_assembly = {
    prefix: "[",
    suffix: "]",
    wrap: (_, source) => source,
};
const sparse_assembly = {
    prefix: "{",
    suffix: "}",
    wrap: (id, source) => `${id}: ${source}`,
};
class Bundle {
    constructor(entry, artifacts, builtins, prelude, assembly) {
        this.entry = entry;
        this.artifacts = artifacts;
        this.builtins = builtins;
        this.prelude = prelude;
        this.assembly = assembly;
    }
    assemble(minified = false) {
        let line = 0;
        let sources = "";
        const sourcemap = combine.create();
        const aliases = new Map();
        const externals = new Map();
        const newlines = (source) => {
            const result = source.match(/\n/g);
            return result != null ? result.length : 0;
        };
        const { entry, artifacts, prelude, assembly: { prefix, suffix, wrap } } = this;
        sources += `${prelude}(${prefix}\n`;
        line += newlines(sources);
        for (const artifact of artifacts) {
            const { module } = artifact;
            if (module.canonical != null)
                aliases.set(module.canonical, module.id);
            for (const external of module.externals)
                externals.set(external, true);
            const start = wrap(module.id, "");
            sources += start;
            line += newlines(start);
            const source_with_sourcemap = minified ? artifact.code.min_source : artifact.code.source;
            const source = combine.removeComments(source_with_sourcemap).trimRight();
            sources += source;
            sourcemap.addFile({ source: source_with_sourcemap, sourceFile: module.file }, { line });
            line += newlines(source);
            const end = ",\n";
            sources += end;
            line += newlines(end);
        }
        const aliases_json = JSON.stringify(to_obj(aliases));
        const externals_json = JSON.stringify(to_obj(externals));
        sources += `${suffix}, ${entry.id}, ${aliases_json}, ${externals_json});\n})\n`;
        const source_map = convert.fromBase64(sourcemap.base64()).toObject();
        return new Artifact(sources, source_map, aliases);
    }
}
Bundle.__name__ = "Bundle";
exports.Bundle = Bundle;
class Artifact {
    constructor(source, sourcemap, exported) {
        this.source = source;
        this.sourcemap = sourcemap;
        this.exported = exported;
    }
    full_source(name) {
        return `${this.source}\n${convert.generateMapFileComment(name)}\n`;
    }
    get module_names() {
        return Array.from(this.exported.keys());
    }
    write(path) {
        const dir = path_1.dirname(path);
        const name = path_1.basename(path, ".js");
        sys_1.write(path, this.full_source(name + ".js.map"));
        sys_1.write(path_1.join(dir, name + ".js.map"), JSON.stringify(this.sourcemap));
        sys_1.write(path_1.join(dir, name + ".json"), JSON.stringify(this.module_names));
    }
}
Artifact.__name__ = "Artifact";
exports.Artifact = Artifact;
class Linker {
    constructor(opts) {
        this.ext = ".js";
        this.entries = opts.entries;
        this.bases = (opts.bases || []).map((path) => path_1.resolve(path));
        this.excludes = new Set((opts.excludes || []).map((path) => path_1.resolve(path)));
        this.externals = new Set(opts.externals || []);
        this.builtins = opts.builtins || false;
        if (this.builtins) {
            this.externals.add("module");
            this.externals.add("constants");
            for (const lib of _builtinLibs)
                this.externals.add(lib);
        }
        for (const entry of this.entries) {
            if (!sys_1.file_exists(entry))
                throw new Error(`entry path ${entry} doesn't exist or isn't a file`);
        }
        for (const base of this.bases) {
            if (!sys_1.directory_exists(base))
                throw new Error(`base path ${base} doesn't exist or isn't a directory`);
        }
        this.cache_path = opts.cache;
        this.cache = new Map();
        this.load_cache();
        this.minify = opts.minify != null ? opts.minify : true;
    }
    link() {
        const [entries] = this.resolve(this.entries);
        const [main, ...plugins] = entries;
        const dirnames = plugins.map((plugin) => path_1.dirname(plugin.file));
        const is_excluded = (module) => {
            return dirnames.find((e) => module.file.startsWith(e)) != null;
        };
        const main_modules = this.reachable(main, is_excluded);
        const parents = new Set(main_modules);
        const plugin_models = [];
        for (const plugin of plugins) {
            const files = this.reachable(plugin, (module) => parents.has(module));
            plugin_models.push(files);
        }
        main_modules.concat(...plugin_models).forEach((module, i) => module.id = i);
        const print = (module) => {
            let ast = module.ast || this.parse_module(module);
            const transformers = [];
            switch (module.type) {
                case "js": {
                    const remove_use_strict = transforms.remove_use_strict();
                    transformers.push(remove_use_strict);
                    const remove_esmodule = transforms.remove_esmodule();
                    transformers.push(remove_esmodule);
                    const rewrite_deps = transforms.rewrite_deps((dep) => {
                        const module_dep = module.dependencies.get(dep);
                        return module_dep != null ? module_dep.id : undefined;
                    });
                    transformers.push(rewrite_deps);
                    break;
                }
                case "json": {
                    transformers.push(transforms.add_json_export());
                    break;
                }
                case "css": {
                    // ???
                    break;
                }
            }
            transformers.push(transforms.wrap_in_function(module.base_path));
            ast = transforms.apply(ast, ...transformers);
            const source = transforms.print_es(ast);
            return convert.removeMapFileComments(source);
        };
        const deps_changed = (module, cached) => {
            if (module.dependencies.size != cached.dependencies.size)
                return false;
            for (const [dep, module_dep] of module.dependencies) {
                const cached_dep = cached.dependencies.get(dep);
                if (cached_dep == null || cached_dep.id != module_dep.id)
                    return true;
            }
            return false;
        };
        const artifacts = (modules) => {
            return modules.map((module) => {
                const cached = this.cache.get(module.file);
                let code;
                if (module.changed || (cached != null && deps_changed(module, cached.module))) {
                    const source = print(module);
                    const minified = this.minify ? minify(module, source) : { min_source: source };
                    code = Object.assign({ source }, minified);
                }
                else
                    code = cached.code;
                return { module, code };
            });
        };
        const main_bundle = new Bundle(main, artifacts(main_modules), this.builtins, preludes.prelude, dense_assembly);
        const plugin_bundles = [];
        for (let j = 0; j < plugins.length; j++) {
            const plugin_bundle = new Bundle(plugins[j], artifacts(plugin_models[j]), this.builtins, preludes.plugin_prelude, sparse_assembly);
            plugin_bundles.push(plugin_bundle);
        }
        const bundles = [main_bundle, ...plugin_bundles];
        this.cache.clear();
        for (const bundle of bundles) {
            for (const artifact of bundle.artifacts) {
                this.cache.set(artifact.module.file, artifact);
            }
        }
        return bundles;
    }
    load_cache() {
        const { cache_path } = this;
        if (cache_path == null || !sys_1.file_exists(cache_path))
            return;
        this.cache.clear();
        const json = JSON.parse(sys_1.read(cache_path));
        if (json.version !== cache_version) {
            console.warn("ignoring cache due to format version mismatch");
            return;
        }
        for (const { module, code } of json.artifacts) {
            const artifact = {
                module: Object.assign({}, module, { ast: undefined, changed: false, dependencies: new Map(), dependency_map: new Map(module.dependency_map), dependency_paths: new Map(module.dependency_paths), externals: new Set(module.externals) }),
                code,
            };
            this.cache.set(artifact.module.file, artifact);
        }
        for (const { module } of this.cache.values()) {
            for (const [dep, file] of module.dependency_paths) {
                module.dependencies.set(dep, this.cache.get(file).module);
            }
        }
    }
    store_cache() {
        if (this.cache_path == null)
            return;
        const artifacts = [];
        for (const artifact of this.cache.values()) {
            const module = Object.assign({}, artifact.module);
            delete module.changed;
            delete module.ast;
            delete module.dependencies;
            artifacts.push({
                module: Object.assign({}, module, { dependency_map: [...module.dependency_map.entries()], dependency_paths: [...module.dependency_paths.entries()], externals: [...module.externals.values()] }),
                code: artifact.code,
            });
        }
        const json = JSON.stringify({ version: cache_version, artifacts });
        sys_1.write(this.cache_path, json);
    }
    resolve_relative(dep, parent) {
        const path = path_1.resolve(path_1.dirname(parent.file), dep);
        if (sys_1.file_exists(path))
            return path;
        const file = path + this.ext;
        const has_file = sys_1.file_exists(file);
        const index = path_1.join(path, "index" + this.ext);
        const has_index = sys_1.file_exists(index);
        if (has_file && has_index)
            throw new Error(`both ${file} and ${index} exist, remove one of them or clean the build and recompile`);
        else if (has_file)
            return file;
        else if (has_index)
            return index;
        else
            throw new Error(`can't resolve '${dep}' from '${parent.file}'`);
    }
    resolve_absolute(dep, parent) {
        const resolve_with_index = (path) => {
            let index = "index" + this.ext;
            const pkg_path = path_1.join(path, "package.json");
            if (sys_1.file_exists(pkg_path)) {
                const pkg = JSON.parse(sys_1.read(pkg_path));
                if (pkg.main != null)
                    index = pkg.main;
            }
            let file = path_1.join(path, index);
            if (sys_1.file_exists(file))
                return file;
            else {
                file += this.ext;
                if (sys_1.file_exists(file))
                    return file;
            }
            return null;
        };
        for (const base of this.bases) {
            let path = path_1.join(base, dep);
            const file = path + this.ext;
            if (sys_1.file_exists(file))
                return file;
            if (sys_1.directory_exists(path)) {
                const file = resolve_with_index(path);
                if (file != null)
                    return file;
            }
            if (parent.file.startsWith(base)) {
                let base_path = parent.file;
                while (true) {
                    base_path = path_1.dirname(base_path);
                    if (base_path == base)
                        break;
                    path = path_1.join(base_path, "node_modules", dep);
                    if (sys_1.directory_exists(path)) {
                        const file = resolve_with_index(path);
                        if (file != null)
                            return file;
                    }
                }
            }
        }
        throw new Error(`can't resolve '${dep}' from '${parent.file}'`);
    }
    resolve_file(dep, parent) {
        if (dep.startsWith("."))
            return this.resolve_relative(dep, parent);
        else
            return this.resolve_absolute(dep, parent);
    }
    parse_module({ file, source, type }) {
        const { ES5, JSON } = ts.ScriptTarget;
        return transforms.parse_es(file, source, type == "json" ? JSON : ES5);
    }
    new_module(file) {
        const source = sys_1.read(file);
        const hash = crypto.createHash("sha256").update(source).digest("hex");
        const type = (() => {
            switch (path_1.extname(file)) {
                case ".json": return "json";
                case ".css": return "css";
                case ".js": return "js";
                default:
                    throw new Error(`unsupported extension of ${file}`);
            }
        })();
        const [base, base_path, canonical] = (() => {
            const [primary, ...secondary] = this.bases;
            const path = path_1.relative(primary, file);
            if (!path.startsWith("..")) {
                return [primary, path, path.replace(/\.js$/, "").replace(/\\/g, "/")];
            }
            for (const base of secondary) {
                const path = path_1.relative(base, file);
                if (!path.startsWith("..")) {
                    return [base, path, undefined];
                }
            }
            throw new Error(`${file} is not under any of base paths`);
        })();
        const cached = this.cache.get(file);
        let ast;
        let dependency_paths;
        let externals;
        const changed = cached == null || cached.module.hash != hash;
        if (changed) {
            ast = this.parse_module({ file, source, type });
            const collected = transforms.collect_deps(ast);
            const filtered = collected.filter((dep) => !this.externals.has(dep));
            dependency_paths = new Map(filtered.map((dep) => [dep, this.resolve_file(dep, { file })]));
            externals = new Set(collected.filter((dep) => this.externals.has(dep)));
        }
        else {
            dependency_paths = cached.module.dependency_paths;
            externals = cached.module.externals;
        }
        return {
            file,
            base,
            base_path,
            canonical,
            id: NaN,
            hash,
            changed,
            source,
            ast,
            type,
            dependency_paths,
            dependency_map: new Map(),
            dependencies: new Map(),
            externals,
        };
    }
    resolve(files) {
        const visited = new Map();
        const pending = files.map((file) => path_1.resolve(file));
        for (;;) {
            const file = pending.shift();
            if (file == null)
                break;
            if (visited.has(file) || this.excludes.has(file))
                continue;
            const module = this.new_module(file);
            visited.set(module.file, module);
            pending.unshift(...module.dependency_paths.values());
        }
        for (const module of visited.values()) {
            for (const [dep, file] of module.dependency_paths) {
                module.dependencies.set(dep, visited.get(file));
            }
        }
        const entries = files.map((file) => visited.get(file));
        return [entries, [...visited.values()]];
    }
    reachable(entry, is_excluded) {
        const reached = new Set();
        const pending = [entry];
        for (;;) {
            const module = pending.shift();
            if (module == null)
                break;
            if (reached.has(module) || this.excludes.has(module.file) || is_excluded(module))
                continue;
            reached.add(module);
            pending.unshift(...module.dependencies.values());
        }
        return [...reached.values()];
    }
}
Linker.__name__ = "Linker";
exports.Linker = Linker;
function minify(module, source) {
    const name = path_1.basename(module.file);
    const min_js = sys_1.rename(name, { ext: '.min.js' });
    const min_js_map = sys_1.rename(name, { ext: '.min.js.map' });
    const minify_opts = {
        output: {
            comments: /^!|copyright|license|\(c\)/i,
        },
        sourceMap: {
            filename: path_1.basename(min_js),
            url: path_1.basename(min_js_map),
        },
    };
    const { code, map, error } = terser.minify(source, minify_opts);
    if (error != null) {
        const { message, line, col } = error;
        throw new Error(`${module.file}:${line - 1}:${col}: ${message}`);
    }
    return { min_source: code || "", min_map: map };
}
exports.minify = minify;
