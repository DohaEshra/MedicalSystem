import { Doctor } from "./doctor";

export class Works_in {
    
    constructor(
                public did:number=Number(),
                public cid:number=Number(),
                public start_time:Date=new Date(),
                public end_time:Date=new Date(),
                public didNavigation:Doctor=new Doctor()
            ){}
}