import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class DoctorRating {
    constructor(
                public pid:number=Number(),
                public did:number=Number(),
                public VisitNumber:number=0,
                public Rating:number=Number(),
                public didNavigation:Doctor|null=null,
                public pidNavigation:Patient|null=null
            )
    {}
}