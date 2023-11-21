import { DbfReader } from './dbf-reader'
import { DataTable } from './models/dbf-file';

export abstract class Dbf  extends DbfReader{
    /**
     * @Method: Read DBase DB (.dbf file)
     * @Param {Buffer}
     * @Return {DataTable}
     */
    public static read(dbaseFile: Buffer, encoder: BufferEncoding = 'utf-8'): DataTable {
        try {

            if (!dbaseFile || dbaseFile.byteLength == 0) {
                throw new SyntaxError("Dbase DB File can't be null or empty.");
            }
            else {
                return DbfReader.read(dbaseFile, encoder);
            }
        }
        catch (error) {
            throw error;
        }
    }
}

