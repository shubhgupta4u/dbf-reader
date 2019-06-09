"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbf_reader_1 = require("./dbf-reader");
class Dbf {
    /**
     * @Method: Read DBase DB (.dbf file)
     * @Param {Buffer}
     * @Return {CSV String}
     */
    static read(dbaseFile) {
        try {
            if (!dbaseFile || dbaseFile.byteLength == 0) {
                throw new SyntaxError("Dbase DB File can't be null or empty.");
            }
            else {
                dbf_reader_1.DbfReader.read(dbaseFile);
                return "";
            }
        }
        catch (error) {
            throw error;
        }
    }
    /**
    * @Method: Read DBase DB (.dbf file) and convert it to CSV
    * @Param {Buffer}
    * @Return {CSV String}
    */
    static readToCsv(dbaseFile) {
        try {
            if (!dbaseFile || dbaseFile.byteLength == 0) {
                throw new SyntaxError("Dbase DB File can't be null or empty.");
            }
            else {
                dbf_reader_1.DbfReader.read(dbaseFile);
                return "";
            }
        }
        catch (error) {
            throw error;
        }
    }
}
exports.Dbf = Dbf;
