export class Doctor {
    
    constructor(
                public id:number=Number(),
                public fname:string='',
                public lname:string='',
                public age:number=Number(),
                public birthDate:Date=new Date(),
                public email:string='',
                public phone:number=Number(),
                public category:string='',
                public buildingNumber:number=Number(),
                public city:string='',
                public area:string='',
                public street:string='',
                public password:string='',
                public gender:string='',
                public profilePic:string='',
                public doctorrating:number=Number()
            )
    {}
}
