export class Doctor {
    
    constructor(
                public id:number=Number(),
                public fname:string='',
                public lname:string='',
                public age:number=Number(),
                public birthDate:Date=new Date(),
                public email:string='',
                public phone:string="",
                public category:string='',
                public buildingNumber:number|null=null,
                public city:string='',
                public area: string | null = null,
                public street:string|null=null,
                public password:string='',
                public gender: string = '',
                public profilePic: string | null = null,
                public doctorRating:number=Number()
            )
    {}
}
