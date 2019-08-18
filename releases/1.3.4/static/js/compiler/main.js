"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = require("yargs");
const path_1 = require("path");
const sys_1 = require("./sys");
const compiler_1 = require("./compiler");
const compile_1 = require("./compile");
const linker_1 = require("./linker");
function read_stdin() {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        const stdin = process.stdin;
        stdin.setEncoding("utf-8");
        stdin.resume();
        let data = "";
        try {
            for (var stdin_1 = __asyncValues(stdin), stdin_1_1; stdin_1_1 = yield stdin_1.next(), !stdin_1_1.done;) {
                const chunk = stdin_1_1.value;
                data += chunk;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (stdin_1_1 && !stdin_1_1.done && (_a = stdin_1.return)) yield _a.call(stdin_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return data;
    });
}
function reply(data) {
    process.stdout.write(JSON.stringify(data));
    process.stdout.write("\n");
}
const tsconfig_json = require("./tsconfig.ext.json");
function build() {
    return __awaiter(this, void 0, void 0, function* () {
        const base_dir = yargs_1.argv.baseDir;
        const bokehjs_dir = yargs_1.argv.bokehjsDir;
        const tsconfig = (() => {
            const tsconfig_path = path_1.join(base_dir, "tsconfig.json");
            const preconfigure = {
                paths: {
                    "*": [
                        path_1.join(bokehjs_dir, "js/lib/*"),
                        path_1.join(bokehjs_dir, "js/types/*"),
                    ],
                },
            };
            if (sys_1.file_exists(tsconfig_path))
                return compiler_1.read_tsconfig(tsconfig_path, preconfigure);
            else
                return compiler_1.parse_tsconfig(tsconfig_json, base_dir, preconfigure);
        })();
        if (compiler_1.is_failed(tsconfig)) {
            return { failure: compiler_1.report_diagnostics(tsconfig.diagnostics) };
        }
        const { files, options } = tsconfig;
        const transformers = compiler_1.default_transformers(options);
        const host = compiler_1.compiler_host(new Map(), options, bokehjs_dir);
        const tsoutput = compiler_1.compile_files(files, options, transformers, host);
        if (compiler_1.is_failed(tsoutput) && options.noEmitOnError)
            return { failure: compiler_1.report_diagnostics(tsoutput.diagnostics) };
        const dist_dir = options.outDir || path_1.join(base_dir, "dist");
        const linker = new linker_1.Linker({
            entries: sys_1.glob(path_1.join(dist_dir, "**", "*.js")),
            bases: [dist_dir, path_1.join(base_dir, "node_modules")],
            cache: path_1.join(dist_dir, "cache.json"),
        });
        const bundles = linker.link();
        linker.store_cache();
        const outputs = [path_1.join(dist_dir, `${path_1.basename(base_dir)}.js`)];
        const min_js = (js) => sys_1.rename(js, { ext: '.min.js' });
        function bundle(minified, outputs) {
            bundles
                .map((bundle) => bundle.assemble(minified))
                .map((artifact, i) => artifact.write(outputs[i]));
        }
        bundle(false, outputs);
        bundle(true, outputs.map(min_js));
        if (compiler_1.is_failed(tsoutput)) {
            const failure = compiler_1.report_diagnostics(tsoutput.diagnostics);
            return { outputs, failure };
        }
        else
            return { outputs };
    });
}
function compile() {
    return __awaiter(this, void 0, void 0, function* () {
        if (yargs_1.argv.file != null) {
            const input = {
                code: yargs_1.argv.code != null ? yargs_1.argv.code : sys_1.read(yargs_1.argv.file),
                lang: yargs_1.argv.lang || "coffeescript",
                file: yargs_1.argv.file,
                bokehjs_dir: yargs_1.argv.bokehjsDir || "./build",
            };
            return yield compile_1.compile_and_resolve_deps(input);
        }
        else {
            const input = JSON.parse(yield read_stdin());
            return yield compile_1.compile_and_resolve_deps(input);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (yargs_1.argv._[0] == "build") {
                reply(yield build());
            }
            else {
                reply(yield compile());
            }
        }
        catch (error) {
            reply({ error: error.stack });
        }
    });
}
main();
