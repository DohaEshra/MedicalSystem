import { Byte } from "@angular/compiler/src/util"

export class RecordPerDate {
    constructor(
                public file_description: string[]=[], 
                public attached_files :Byte[][]=[], 
                public date :Date=new Date(), 
                public summary:string='',
                public prescription:string=''
                ){}

}
