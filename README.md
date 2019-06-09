# dbf-reader
A Node.js/Typescript module to read tabular data from the dBase DB (.dbf) file.
## Installation 
```sh
npm install dbf-reader --save
yarn add dbf-reader
bower install dbf-reader --save
```
## Usage 
### TypeScript
#### Case 1: Reading (.dbf) file from local path 'D:\Workspace\tests\sampleFiles\sample.dbf'
```typescript
import { Dbf } from 'dbf-reader';
import { DataTable } from 'dbf-reader/models/dbf-file';
import * as fs from "fs";

let buffer:Buffer=fs.readFileSync('/Workspace/tests/sampleFiles/sample.dbf')
let datatable:DataTable = Dbf.read(buffer);
if (datatable) {
    datatable.rows.forEach((row: any) => {
        datatable.columns.forEach((col: Column) => {
            console.log(row[col.name]);
        });
    });
}
```
```sh
Output should be an instance of DataTable class
```
### Javascript
#### Case 1: Reading (.dbf) file from local path 'D:\Workspace\tests\sampleFiles\sample.dbf'
```javascript
var dbf = require('dbf-reader');
var fs = require('fs');

var buffer:Buffer=fs.readFileSync('/Workspace/tests/sampleShpFiles/sample2-line.shp')
var datatable = dbf.read(buffer);
if (datatable) {
    datatable.rows.forEach((row) => {
        datatable.columns.forEach((col) => {
            console.log(row[col.name]);
        });
    });
}
```
### AMD
```javascript
define(function(require,exports,module){
  var parser = require('dbf-reader');
});
```
## Supported dBase DB (.dbf) file version
#### .dbf File Type
```.dbf File Type
Clipper/dBase III
dBase IV
dBase IV Windows
Foxpro 2.x
Visual Foxpro
```
## Supported Data Type
#### Standard Property Type
```Standard Property Type
Character: Supported
Character (binary): Supported
Currency: Supported
Date: Supported
Datetime: Supported
Double: Supported
Float: Supported
General: Supported
Integer: Supported
Integer (AutoIncre): Supported
Logical: Supported
Numeric: Supported
Varchar: Supported
Varchar (binary): Supported
```
```NOT Standard Property Type
Memo: Not Supported
Memo (binary): Not Supported
Varbinary: Not Supported
Blob: Not Supported
```
#### Custom Property Type
```Custom Property Type
Not Supported
```
#### RI Property Type
```RI Property Type
Not Supported
```
### Support
```Bug or Suggestion Reporting
You can directly send any bug/issue or suggestion to my personal email id: shubhgupta4u@gmail.com.
```