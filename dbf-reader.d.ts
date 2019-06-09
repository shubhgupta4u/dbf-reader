/// <reference types="node" />
import { DataTable } from "./models/dbf-file";
export declare abstract class DbfReader {
    static readonly fileHeaderSize: number;
    static readonly fieldDescriptorSize: number;
    private static readFieldsInfo;
    private static getDateValue;
    private static getFieldValue;
    private static julianIntToDate;
    private static getTypeName;
    /**
     * read Dbase DB File
     */
    protected static read(dbaseFile: Buffer): DataTable;
    private static FieldDescriptor;
}
