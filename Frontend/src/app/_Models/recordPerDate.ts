import { Byte } from "@angular/compiler/src/util"

export class RecordPerDate {
    constructor(
                public file_description: string[], 
                public attached_files :Byte[][], 
                public date :Date, 
                public summary:string
                ){}

}
