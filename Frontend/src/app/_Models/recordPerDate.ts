import { Byte } from "@angular/compiler/src/util"

export class RecordPerDate {
    constructor(
                public did:number=Number(), 
                public pid:number=Number(), 
                public file_description: string[]=[], 
                public attached_files :string[]=[], 
                public date :Date=new Date(), 
                public summary:string='',
                public testType:String[]= [],
                public prescription:string=''
                ){}

}
