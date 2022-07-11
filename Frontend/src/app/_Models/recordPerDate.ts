import { Byte } from "@angular/compiler/src/util"
import { Doctor } from "./doctor";

export class RecordPerDate {
    constructor(
                public did:number=Number(), 
                public pid:number=Number(), 
                public file_description: string[]=[], 
                public attached_files :any[]=[], 
                public date :Date=new Date(), 
                public summary:string='',
                public testType:String[]= [],
                public prescription:string='',
                public didNavigation:Doctor|null=null
                ){}

}
