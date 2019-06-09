export class DataTable{
    columns:Array<Column>;
    rows:Array<any>;
    constructor(){
        this.columns=new Array<Column>();
        this.rows=new Array<any>();
    }
}
export class Column{
    name:string;
    type:string;
}