import { Guid } from "guid-typescript";
import { Doctor } from "src/app/_Models/doctor";

export class FileInfo {
    constructor(
                public did:number=Number(), 
                public pid:number=Number(), 
                public oid:number|null=null, 
                public file_description: string|null=null, 
                public attached_files :Blob|null=null, 
                public date :Date=new Date(), 
                public summary:string='',
                public prescription:string='',
                public didNavigation:Doctor|null=new Doctor(),
                public testType:String|null= null
            ){}
}

