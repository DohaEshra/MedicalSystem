import { Record } from "./record";
import { Visit } from "./visit";

export class Patient {
    constructor(public id:number, 
                public fname:string, 
                public lname: string, 
                public age:number, 
                public email:string, 
                public address:string, 
                public phone:number,                 
                public username:string,
                public records:Record[],
                public visits:Visit[],
                public password:string,
                public profilePic:string,
            ){}
}
