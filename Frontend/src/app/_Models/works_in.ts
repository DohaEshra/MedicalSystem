import { Doctor } from "./doctor";

export class Works_in {
    
    constructor(
                public did:number=Number(),
                public cid:number=Number(),
                public start_time:string="",
                public end_time:string="",
                public maxpatientNo:number=Number(),
                public didNavigation:Doctor|null = null
            ){}
}