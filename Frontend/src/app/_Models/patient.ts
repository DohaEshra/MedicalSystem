import { Record } from "./record";
import { Visit } from "./visit";

export class Patient {
    constructor(public id:number=Number(), 
                public fname:string='', 
                public lname: string='', 
                public age:number=Number(), 
                public email:string='', 
                public phone:string='',   
                public username:string='',              
                public password:string='',
                public birthDate:Date=new Date(),
                public gender:string='',
                public profilePic:string='',
                public buildingNumber:number=Number(),
                public street:string='',
                public area:string='',
                public city:string='',
                public records:Record[]=[],
                public visits:Visit[]=[],
            ){}
}
