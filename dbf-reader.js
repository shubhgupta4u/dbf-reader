"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbf_file_1 = require("./models/dbf-file");
class DbfReader {
    static readFieldsInfo(dbaseFile) {
        try {
            let byteRead;
            let columns = new Array();
            let i = 0;
            do {
                byteRead = DbfReader.fileHeaderSize + (i * DbfReader.fieldDescriptorSize) + 1;
                let fieldNameLength = 0;
                while (dbaseFile.subarray(byteRead + fieldNameLength, byteRead + fieldNameLength + 1).toString("utf8") != "\u0000" && fieldNameLength < 11) {
                    fieldNameLength += 1;
                }
                let fieldName = dbaseFile.subarray(byteRead, byteRead + fieldNameLength).toString("utf8");
                byteRead = byteRead + 11;
                let fieldType = dbaseFile.subarray(byteRead, byteRead + 1).toString("utf8");
                byteRead = byteRead + 1;
                byteRead = byteRead + 4; //reserved
                let fieldLength = dbaseFile.readIntLE(byteRead, 1);
                byteRead = byteRead + 1;
                let decimalCount = dbaseFile.readIntLE(byteRead, 1);
                byteRead = byteRead + 1;
                columns.push(new dbf_file_1.FieldDescriptor(fieldName, fieldType, fieldLength, decimalCount));
                byteRead = byteRead + 14; // Not required to read
                i += 1;
            } while (dbaseFile.subarray(byteRead, byteRead + 1).toString("utf8") != "\r");
            return columns;
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * read Dbase DB File
     */
    static read(dbaseFile) {
        try {
            let byteRead = 0;
            let dbfFileType = Buffer.from(dbaseFile.buffer, byteRead, 1).toString('hex');
            byteRead = byteRead + 1;
            let year = Buffer.from(dbaseFile.buffer, byteRead, 1).toString('ascii');
            byteRead = byteRead + 1;
            let month = Buffer.from(dbaseFile.buffer, byteRead, 1).toString('ascii');
            byteRead = byteRead + 1;
            let day = Buffer.from(dbaseFile.buffer, byteRead, 1).toString('ascii');
            byteRead = byteRead + 1;
            let lastUpdDate = year + month + day;
            let recordNumber = dbaseFile.readInt8(byteRead);
            byteRead = byteRead + 4;
            let headerSize = dbaseFile.readInt16LE(byteRead);
            byteRead = byteRead + 8;
            let recordSize = dbaseFile.readInt16LE(byteRead);
            byteRead = byteRead + 8;
            byteRead = 32;
            let columns = DbfReader.readFieldsInfo(dbaseFile);
            byteRead = headerSize + 1;
            let dbf = new dbf_file_1.DbfFile(dbfFileType, lastUpdDate, recordNumber, headerSize, recordSize);
            columns.forEach((c) => { dbf.fieldDescriptor.push(c); });
            byteRead = headerSize;
            for (var i = 0; i < dbf.recordCount; i++) {
                let record = {};
                if (dbaseFile.subarray(byteRead, byteRead + 1).toString('utf8') == " ") {
                    byteRead = byteRead + 1;
                    columns.forEach(col => {
                        record[col.fieldName] = dbaseFile.subarray(byteRead, byteRead + col.fieldLength).toString('utf8').trim();
                        byteRead = byteRead + col.fieldLength;
                    });
                    dbf.records.push(record);
                }
                else {
                    byteRead = byteRead + 1;
                    columns.forEach(col => {
                        byteRead = byteRead + col.fieldLength;
                    });
                }
            }
            console.log(dbf);
        }
        catch (error) {
            console.log(error);
        }
    }
}
DbfReader.fileHeaderSize = 31;
DbfReader.fieldDescriptorSize = 32;
exports.DbfReader = DbfReader;
