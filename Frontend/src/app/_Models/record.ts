import { Byte } from "@angular/compiler/src/util"
import { Doctor } from "./doctor"
export class Record {
    constructor(
                public did:number=Number(), 
                public pid:number=Number(), 
                public oid:number|null=null, 
                public file_description: string|null=null, 
                public attached_files :string|null=null, 
                public date :Date=new Date(), 
                public summary:string='',
                public prescription:string='',
                public didNavigation:Doctor|null=new Doctor()
                ){}

}

