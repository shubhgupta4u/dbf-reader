import { expect, should } from 'chai';
import * as fs from "fs";
import { Dbf } from '../lib/dbf';
import { DataTable, Column } from '../lib/models/dbf-file';


describe('Reading dbf file', function () {
  it('check sample2-polygon', function () {
    var pathPrefix='E:/DEV/libs/dbf-reader';

    let buffer:Buffer=fs.readFileSync(pathPrefix+'/tests/sample-dbf/sample2-polygon.dbf')
    let datatable: DataTable = Dbf.read(buffer);
    should().exist(datatable);
    should().equal(datatable.columns.length,35);
    should().equal(datatable.rows.length,9);
  });
  it('check db4window', function () {
    var pathPrefix='E:/DEV/libs/dbf-reader';

    let buffer:Buffer=fs.readFileSync(pathPrefix+'/tests/sample-dbf/db4.dbf')
    let datatable: DataTable = Dbf.read(buffer);
    should().exist(datatable);
    should().equal(datatable.columns.length,3);
    should().equal(datatable.rows.length,1);
  });
  it('check db4window', function () {
    var pathPrefix='E:/DEV/libs/dbf-reader'

    let buffer:Buffer=fs.readFileSync(pathPrefix+'/tests/sample-dbf/db4window.dbf')
    let datatable: DataTable = Dbf.read(buffer);
    should().exist(datatable);
    should().equal(datatable.columns.length,2);
    should().equal(datatable.rows.length,3);
  });
  it('check VisualFoxPro', function () {
    var pathPrefix='E:/DEV/libs/dbf-reader'

    let buffer:Buffer=fs.readFileSync(pathPrefix+'/tests/sample-dbf/VisualFoxPro.dbf')
    let datatable: DataTable = Dbf.read(buffer);
    should().exist(datatable);
    should().equal(datatable.columns.length,2);
    should().equal(datatable.rows.length,2);
  });
  it('check DateDbf', function () {
    var pathPrefix='E:/DEV/libs/dbf-reader'

    let buffer:Buffer=fs.readFileSync(pathPrefix+'/tests/sample-dbf/DateDbf.dbf')
    let datatable: DataTable = Dbf.read(buffer);
    should().exist(datatable);
    should().equal(datatable.columns.length,1);
    should().equal(datatable.rows.length,10);
  });
});