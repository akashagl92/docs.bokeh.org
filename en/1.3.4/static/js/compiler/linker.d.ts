import * as ts from "typescript";
export declare function imap<T, U>(iter: Iterable<T>, fn: (item: T, i: number) => U): Iterable<U>;
export declare type Path = string;
export declare type Parent = {
    file: Path;
};
export declare type ModuleType = "js" | "json" | "css";
export declare type ModuleInfo = {
    file: Path;
    base: Path;
    base_path: Path;
    canonical?: string;
    id: number;
    hash: string;
    changed: boolean;
    type: ModuleType;
    source: string;
    ast?: ts.SourceFile;
    dependency_paths: Map<string, Path>;
    dependency_map: Map<string, number>;
    dependencies: Map<string, ModuleInfo>;
    externals: Set<string>;
};
export declare type ModuleCode = {
    source: string;
    map?: string;
    min_source: string;
    min_map?: string;
};
export declare type ModuleArtifact = {
    module: ModuleInfo;
    code: ModuleCode;
};
export declare type Assembly = {
    prefix: string;
    suffix: string;
    wrap: (id: number, source: string) => string;
};
export declare class Bundle {
    readonly entry: ModuleInfo;
    readonly artifacts: ModuleArtifact[];
    readonly builtins: boolean;
    readonly prelude: string;
    readonly assembly: Assembly;
    constructor(entry: ModuleInfo, artifacts: ModuleArtifact[], builtins: boolean, prelude: string, assembly: Assembly);
    assemble(minified?: boolean): Artifact;
}
export declare class Artifact {
    readonly source: string;
    readonly sourcemap: object;
    readonly exported: Map<string, number>;
    constructor(source: string, sourcemap: object, exported: Map<string, number>);
    full_source(name: string): string;
    readonly module_names: string[];
    write(path: string): void;
}
export interface LinkerOpts {
    entries: Path[];
    bases?: Path[];
    excludes?: Path[];
    externals?: string[];
    builtins?: boolean;
    cache?: Path;
    minify?: boolean;
}
export declare class Linker {
    readonly entries: Path[];
    readonly bases: Path[];
    readonly excludes: Set<Path>;
    readonly externals: Set<string>;
    readonly builtins: boolean;
    readonly cache_path?: Path;
    readonly cache: Map<Path, ModuleArtifact>;
    readonly minify: boolean;
    constructor(opts: LinkerOpts);
    link(): Bundle[];
    load_cache(): void;
    store_cache(): void;
    protected readonly ext = ".js";
    protected resolve_relative(dep: string, parent: Parent): string;
    protected resolve_absolute(dep: string, parent: Parent): string;
    resolve_file(dep: string, parent: Parent): Path;
    private parse_module;
    new_module(file: Path): ModuleInfo;
    resolve(files: Path[]): [ModuleInfo[], ModuleInfo[]];
    reachable(entry: ModuleInfo, is_excluded: (module: ModuleInfo) => boolean): ModuleInfo[];
}
export declare function minify(module: ModuleInfo, source: string): {
    min_source: string;
    min_map?: string;
};
