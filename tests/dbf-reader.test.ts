import { expect, should } from 'chai';
import * as fs from "fs";
import { Dbf } from '../lib/dbf';

describe('Reading dbf file', function () {
  it('readSample2', function() {
    // let buffer:Buffer=fs.readFileSync('/Workspace/dbf-csv/tests/sample-dbf/db3Export.dbf')
    let buffer:Buffer=fs.readFileSync('/Workspace/dbf-csv/tests/sample-dbf/sample2-polygon.dbf')
    // let buffer:Buffer=fs.readFileSync('/Workspace/dbf-csv/tests/sample-dbf/db4.dbf')
    // let buffer:Buffer=fs.readFileSync('/Workspace/dbf-csv/tests/sample-dbf/db4window.dbf')
    // let buffer:Buffer=fs.readFileSync('/Workspace/dbf-csv/tests/sample-dbf/VisualFoxPro.dbf')
    let csv:string = Dbf.read(buffer);
    should().exist(csv);
  });
});