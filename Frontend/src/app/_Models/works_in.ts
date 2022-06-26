import { Clinic } from "./clinic";
import { Doctor } from "./doctor";

export class Works_in {
    
    constructor(
                public did:number,
                public cid:number,
                public start_time:Date,
                public end_time:Date,
                public cidNavigation:Clinic,
                public didNavigation:Doctor
            ){}
}