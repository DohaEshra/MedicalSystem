import { Guid } from "guid-typescript";
import { Doctor } from "./doctor"
import { Other } from "./other";
import { Patient } from "./patient";
export class Record {
    constructor(
                public fno:Guid|null=null,
                public file_description: string="", 
                public testType:String= "",
                public attached_files :string="", 
                public did:number=Number(), 
                public pid:number=Number(), 
                public oid:number|null=null, 
                public date :Date|string="", 
                public summary:string='',
                public prescription:string='',
                public didNavigation:Doctor|null=new Doctor(),
                public pidNavigation:Patient|null=new Patient(),
                public oidNavigation: Other | null = new Other(),
                ){}

}

