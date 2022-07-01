export class Doctor {
    
    constructor(
                public id:number,
                public fname:string,
                public lname:string,
                public age:number,
                public birthDate:Date,
                public email:string,
                public city:string,
                public area:string,
                public street:string,
                public buildingNumber:number,
                public phone:string,
                public password:string,
                public gender:string,
                public category:string,
                public profilePic:string
            )
    {}
}
