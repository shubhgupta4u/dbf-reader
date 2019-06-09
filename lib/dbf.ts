import { DbfReader } from './dbf-reader'

export abstract class Dbf  {
    /**
     * @Method: Read DBase DB (.dbf file)
     * @Param {Buffer}
     * @Return {CSV String}
     */
    public static read(dbaseFile: Buffer): string {
        try {

            if (!dbaseFile || dbaseFile.byteLength == 0) {
                throw new SyntaxError("Dbase DB File can't be null or empty.");
            }
            else {
                DbfReader.read(dbaseFile);
                return ""
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
    public static readToCsv(dbaseFile: Buffer): string {
        try {

            if (!dbaseFile || dbaseFile.byteLength == 0) {
                throw new SyntaxError("Dbase DB File can't be null or empty.");
            }
            else {
                DbfReader.read(dbaseFile);
                return ""
            }
        }
        catch (error) {
            throw error;
        }
    }
}

