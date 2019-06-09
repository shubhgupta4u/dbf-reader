import { expect, should } from 'chai';
import * as fs from "fs";
import { Dbf } from '../lib/dbf';
import { DataTable } from '../lib/models/dbf-file';

describe('Reading dbf file', function () {
  it('readSample2', function() {
    // let buffer:Buffer=fs.readFileSync('/Workspace/dbf-reader/tests/sample-dbf/DateDbf.dbf')
    let buffer:Buffer=fs.readFileSync('/Workspace/dbf-reader/tests/sample-dbf/VisualFoxPro complete.dbf')
    // let buffer:Buffer=fs.readFileSync('/Workspace/dbf-csv/tests/sample-dbf/sample2-polygon.dbf')
    // let buffer:Buffer=fs.readFileSync('/Workspace/dbf-csv/tests/sample-dbf/db4.dbf')
    // let buffer:Buffer=fs.readFileSync('/Workspace/dbf-csv/tests/sample-dbf/db4window.dbf')
    // let buffer:Buffer=fs.readFileSync('/Workspace/dbf-csv/tests/sample-dbf/VisualFoxPro.dbf')
    let datatable:DataTable = Dbf.read(buffer);
    should().exist(datatable);
  });
});