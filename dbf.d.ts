/// <reference types="node" />
import { DbfReader } from './dbf-reader';
import { DataTable } from './models/dbf-file';
export declare abstract class Dbf extends DbfReader {
    /**
     * @Method: Read DBase DB (.dbf file)
     * @Param {Buffer}
     * @Return {DataTable}
     */
    static read(dbaseFile: Buffer): DataTable;
}
