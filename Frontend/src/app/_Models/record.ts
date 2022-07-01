import { Byte } from "@angular/compiler/src/util"
import { Doctor } from "./doctor"
export class Record {
    constructor(
                public did:number=Number(), 
                public pid:number=Number(), 
                public oid:number=Number(), 
                public fno:number=Number(), 
                public file_description: string='', 
                public attached_files :Byte[]=[], 
                public date :Date=new Date(), 
                public summary:string='',
                public prescription:string='',
                public didNavigation:Doctor=new Doctor()
                ){}

}

