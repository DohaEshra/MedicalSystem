import { Guid } from "guid-typescript";
import { Doctor } from "./doctor"
export class Record {
    constructor(
                public fno:Guid,
                public file_description: string="", 
                public testType:String= "",
                public attached_files :string="", 
                public did:number=Number(), 
                public pid:number=Number(), 
                public oid:number|null=null, 
                public date :Date=new Date(), 
                public summary:string='',
                public prescription:string='',
                public didNavigation:Doctor|null=new Doctor(),
                ){}

}

