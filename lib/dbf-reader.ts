import { FieldDescriptor, DbfFile } from "./models/dbf-file";

export class DbfReader {

    static readonly fileHeaderSize: number = 31;
    static readonly fieldDescriptorSize: number = 32
    private static readFieldsInfo(dbaseFile: Buffer): Array<FieldDescriptor> {
        try {
            let byteRead: number;
            let columns: Array<FieldDescriptor> = new Array<FieldDescriptor>();
            let i = 0;
            do {
                byteRead = DbfReader.fileHeaderSize + (i * DbfReader.fieldDescriptorSize) + 1;
                let fieldNameLength: number = 0;
                while (dbaseFile.subarray(byteRead + fieldNameLength, byteRead + fieldNameLength + 1).toString("utf8") != "\u0000" && fieldNameLength < 11) {
                    fieldNameLength += 1;
                }
                let fieldName: string = dbaseFile.subarray(byteRead, byteRead + fieldNameLength).toString("utf8");
                byteRead = byteRead + 11;
                let fieldType: string = dbaseFile.subarray(byteRead, byteRead + 1).toString("utf8")
                byteRead = byteRead + 1;
                byteRead = byteRead + 4; //reserved
                let fieldLength: number = dbaseFile.readIntLE(byteRead, 1);
                byteRead = byteRead + 1;
                let decimalCount: number = dbaseFile.readIntLE(byteRead, 1);
                byteRead = byteRead + 1;
                columns.push(new FieldDescriptor(fieldName, fieldType, fieldLength, decimalCount));
                byteRead = byteRead + 14; // Not required to read
                i += 1;
            } while (dbaseFile.subarray(byteRead, byteRead + 1).toString("utf8") != "\r")
            return columns;
        } catch (error) {
            throw error;
        }
    }
    /**
     * read Dbase DB File
     */
    public static read(dbaseFile: Buffer) {
        try {
            let byteRead: number = 0;
            let dbfFileType: string = Buffer.from(dbaseFile.buffer, byteRead, 1).toString('hex');
            byteRead = byteRead + 1;
            let year: string = Buffer.from(dbaseFile.buffer, byteRead, 1).toString('ascii');
            byteRead = byteRead + 1;
            let month: string = Buffer.from(dbaseFile.buffer, byteRead, 1).toString('ascii');
            byteRead = byteRead + 1;
            let day: string = Buffer.from(dbaseFile.buffer, byteRead, 1).toString('ascii');
            byteRead = byteRead + 1;
            let lastUpdDate: string = year + month + day;
            let recordNumber: number = dbaseFile.readInt8(byteRead);
            byteRead = byteRead + 4;
            let headerSize: number = dbaseFile.readInt16LE(byteRead);
            byteRead = byteRead + 8;
            let recordSize: number = dbaseFile.readInt16LE(byteRead);
            byteRead = byteRead + 8;
            byteRead = 32;
            let columns: Array<FieldDescriptor> = DbfReader.readFieldsInfo(dbaseFile);
            byteRead = headerSize + 1;
            let dbf: DbfFile = new DbfFile(dbfFileType, lastUpdDate, recordNumber, headerSize, recordSize);
            columns.forEach((c) => { dbf.fieldDescriptor.push(c) });
            byteRead = headerSize;
            for (var i = 0; i < dbf.recordCount; i++) {
                let record: any = {};
                if (dbaseFile.subarray(byteRead, byteRead + 1).toString('utf8') == " ") {
                    byteRead = byteRead + 1;
                    columns.forEach(col => {
                        record[col.fieldName] = dbaseFile.subarray(byteRead, byteRead + col.fieldLength).toString('utf8').trim();
                        byteRead = byteRead + col.fieldLength;
                    });
                    dbf.records.push(record);
                }
                else{
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