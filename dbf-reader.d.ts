/// <reference types="node" />
export declare class DbfReader {
    static readonly fileHeaderSize: number;
    static readonly fieldDescriptorSize: number;
    private static readFieldsInfo;
    /**
     * read Dbase DB File
     */
    static read(dbaseFile: Buffer): void;
}
