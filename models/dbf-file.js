"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DbfFile {
    constructor(dbfFileType, lastUpdDt, recordCount, recordStartOffset, recordSize) {
        this.fieldDescriptor = new Array();
        this.records = new Array();
        this.recordCount = recordCount;
        this.lastUpdDt = lastUpdDt;
        this.version = dbfFileType;
        this.recordSize = recordSize;
        this.recordStartOffset = recordStartOffset;
    }
}
exports.DbfFile = DbfFile;
class FieldDescriptor {
    constructor(fieldName, fieldType, fieldLength, fieldDecimalCount) {
        this.fieldName = fieldName;
        this.fieldType = fieldType;
        this.fieldLength = fieldLength;
        this.fieldDecimalCount = fieldDecimalCount;
    }
}
exports.FieldDescriptor = FieldDescriptor;
// This is the file header for a DBF. We do this special layout with everything
// // packed so we can read straight from disk into the structure to populate it
// export class DbfHeader
// {
//     version:any; //byte
//     updateYear:any; //byte
//     updateMonth:any; //byte
//     updateDay:any; //byte
//     numRecords:number; //2byte
//     headerLen:number; //2byte
//     recordLen:number;
//     reserved1:number; //2byte
//     incompleteTrans:any; //byte
//     encryptionFlag:any; //byte
//     reserved2:number; //4byte
//     reserved3:number; //8byte
//     MDX:any; //byte
//     language:any; //byte
//     reserved4:number; //2byte
//     getFileType(version:string):string{
//         switch(version){
// //             0x02	0000 0010	FoxBase 1.0
// // 0x03	0000 0011	FoxBase 2.x / dBASE III
// // 0x83	1000 0011	FoxBase 2.x / dBASE III with memo file
// // 0x30	0011 0000	Visual FoxPro
// // 0x31	0011 0001	Visual FoxPro with auto increment
// // 0x32	0011 0010	Visual FoxPro with varchar/varbinary
// // 0x43	0100 0011	dBASE IV SQL Table, no memo file
// // 0x63	0110 0011	dBASE IV SQL System, no memo file
// // 0x8b	1000 1011	dBASE IV with memo file
// // 0xcb	1100 1011	dBASE IV SQL Table with memo file
// // 0xfb	1111 1011	FoxPro 2
// // 0xf5	1111 0101	FoxPro 2 with memo file
//             case "02": return "FoxBase 1.0";
//             case "03": return "FoxBase 2.x / dBASE III";
//             case "83": return "FoxBase 2.x / dBASE III with memo file";
//             // case 49: return "Visual FoxPro, autoincrement enabled";
//             // case 50: return "Visual FoxPro with field type Varchar or Varbinary";
//             // case 67: return "dBASE IV SQL table files, no memo";
//             // case 99: return "dBASE IV SQL system files, no memo";
//             // case 131: return "FoxBASE+/dBASE III PLUS, with memo";
//             // case 139: return "dBASE IV with memo";
//             // case 203: return "dBASE IV SQL table files, with memo";
//             // case 229: return "HiPer-Six format with SMT memo file";
//             // case 245: return "FoxPro 2.x (or earlier) with memo";
//             // case 251: return "FoxBASE";
//             default: return "Unknown File Type";
//         }
//     }    
// }
// This is the field descriptor structure. 
// There will be one of these for each column in the table.
// export class FieldDescriptor
// {
//     fieldName:string;
//     fieldType:string;
//     address:number; //4byte
//     fieldLen:any; //byte
//     count:any; //byte
//     reserved1:number; //2byte
//     workArea:any; //byte
//     reserved2:number; //2byte
//     flag:any; //byte    
//     reserved3:Array<any>; //byte[]
//     indexFlag:any; //byte  
// }
