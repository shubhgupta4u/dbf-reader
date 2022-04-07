"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbf_reader_1 = require("./dbf-reader");
class Dbf extends dbf_reader_1.DbfReader {
    /**
     * @Method: Read DBase DB (.dbf file)
     * @Param {Buffer}
     * @Param {string}
     * @Return {DataTable}
     */
    static read(dbaseFile, encoding = 'utf8') {
        try {
            if (!dbaseFile || dbaseFile.byteLength == 0) {
                throw new SyntaxError("Dbase DB File can't be null or empty.");
            }
            else {
                return dbf_reader_1.DbfReader.read(dbaseFile, encoding);
            }
        }
        catch (error) {
            throw error;
        }
    }
}
exports.Dbf = Dbf;
