/// <reference types="node" />
export declare abstract class Dbf {
    /**
     * @Method: Read DBase DB (.dbf file)
     * @Param {Buffer}
     * @Return {CSV String}
     */
    static read(dbaseFile: Buffer): string;
    /**
    * @Method: Read DBase DB (.dbf file) and convert it to CSV
    * @Param {Buffer}
    * @Return {CSV String}
    */
    static readToCsv(dbaseFile: Buffer): string;
}
