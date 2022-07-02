import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Visit {
    
    constructor(
                public pid:number,
                public did:number,
                public appointment_time:Date,
                public didNavigation:Doctor,
                public pidNavigation:Patient
            ){}
}
