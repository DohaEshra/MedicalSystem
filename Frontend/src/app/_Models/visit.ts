import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Visit {
    
    constructor(
                public pid:number=Number(),
                public did:number=Number(),
                public appointment_time:Date|string=new Date(),
                public appointmentStatus:number=Number(),
                public appointmentNo:number=Number(),
                public didNavigation:Doctor|null=null,
                public pidNavigation:Patient|null=null
            ){}
}
