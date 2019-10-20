export declare function scan(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
export declare function glob(...patterns: string[]): string[];
export declare const read: (path: string, encoding?: string | undefined) => string | undefined;
export declare const write: (path: string, data: string, writeByteOrderMark?: boolean | undefined) => void;
export declare const file_exists: (path: string) => boolean;
export declare const directory_exists: (path: string) => boolean;
export declare function rename(path: string, options: {
    base?: string;
    dir?: string;
    ext?: string;
}): string;
