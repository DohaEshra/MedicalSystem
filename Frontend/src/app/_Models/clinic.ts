import { Visit } from "./visit";

export class Clinic {
    
    constructor(
                public id:number,
                public name:string,
                public address:string,
                public phone:number,
                public visits:Visit,
            ){}
}