export declare class DbfFile {
    recordStartOffset: number;
    version: string;
    lastUpdDt: string;
    recordCount: number;
    recordSize: number;
    records: Array<any>;
    readonly fieldDescriptor: Array<FieldDescriptor>;
    constructor(dbfFileType: string, lastUpdDt: string, recordCount: number, recordStartOffset: number, recordSize: number);
}
export declare class FieldDescriptor {
    readonly fieldName: string;
    readonly fieldType: string;
    readonly fieldLength: number;
    readonly fieldDecimalCount: number;
    constructor(fieldName: string, fieldType: string, fieldLength: number, fieldDecimalCount: number);
}
