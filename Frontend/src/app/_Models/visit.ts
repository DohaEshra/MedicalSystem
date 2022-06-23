import { Clinic } from "./clinic";
import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Visit {
    
    constructor(
                public pid:number,
                public did:number,
                public cid:number,
                public appointment_time:Date,
                public cidNavigation:Clinic,
                public didNavigation:Doctor,
                public pidNavigation:Patient
            ){}
}
