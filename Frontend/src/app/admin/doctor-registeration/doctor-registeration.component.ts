import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/_Models/doctor';
import { Other } from 'src/app/_Models/other';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-doctor-registeration',
  templateUrl: './doctor-registeration.component.html',
  styleUrls: ['./doctor-registeration.component.css']
})
export class DoctorRegisterationComponent implements OnInit {
  cities: string[]=[];
  selectedCity: string="";
  subscribe : Subscription | null = null ;
  isRegistrationFailed = false; 
  TruePassword = false;
  errorMessage:any;
  url:any;
  imagePath:any;
  profileImage = false;
  message = "There is no attached file.";
  agePattern = '^[0-9]+$';

  phonePattern = '^[(012)|(010)|(011)|(015)]{3}[0-9]{8}$';
  addressPattern = '^[A-Za-z0-9,_.-]{10,40}$';
  namePattern = '^[A-Za-z]{2,20}$';
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
  passPattern='((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))';
  user : any ={ id: 0, fname:'', lname:'', birthDate:new Date , email:'', city:'',area:null, gender:'',buildingNumber:null,street:null, phone:'', username:'',job:null, password:'', category:null,confirmPass:'',image:null};
  
  constructor(public adminService: AdminService , public router :Router ) {
  
   }
  ngOnInit() {
    this.cities = [
      'Alexandria',
       'Cairo',
      'Mansoura',
      'Fayoum',
      'Monefya',
      'Gizeh', 
      'Port Said', 
      'Suez', 
      'Luxor', 
      'Tanta', 
      'Asyut',
      'Ismailia',
      'Aswan', 
      'Damietta', 
      'Al-mnia', 
      'Qena', 
      'Sohag', 
      'Arish', 
      'Marsa Matrouh', 
      'Kafr el-Sheikh',
      'Hurghada', 
      'Beni suef', 
      '6th of October',
  ];
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }

  displayCategory(job: string, category: any){
    if(job == 'Doctor')
      category.style.display = 'block';
    else
      category.style.display = 'none';
  }

  comparePassWords(){
    this.user.password === this.user.confirmPass 
    ? this.TruePassword = true 
    : this.TruePassword = false;
  }

  imageErrorMessage(msg:string, imageInput:any){
    this.profileImage = false;
    this.message = msg;
    imageInput.style.display = 'none';
    this.user.image = '';
    return;
  }

  onFileSelected(event: any, imageInput:any) {
    const files = event.target.files;
    // console.log('files',files)
    if (files.length === 0){
      this.imageErrorMessage("There is no attached file.",imageInput)
      return;
    }

    const mimeType = files[0].type;
        if (!mimeType.match(/image\/*/) ) {
      this.imageErrorMessage("Only images are supported.",imageInput)
      return;
    }

    this.profileImage = true
    imageInput.style.display = 'block';
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = () => { 
      console.log(reader)
      this.url = reader.result;
      this.user.image = this.url; 
      //console.log("user " ,this.user)
    }
  }

   onSubmit(myForm:NgForm): void {

    console.log('fooooooooorm',myForm , myForm.valid, this.TruePassword)
    this.user.gender== 'M' && this.user.image==null 
    ?this.user.image = '../../../assets/M.jpg'
    :this.user.image = '../../../assets/F.jpg';

    // if(this.user.job == 'Doctor')
    //   myForm.form.errors.push(new Error())
    
    if(this.user.job === 'Doctor'){
      if(myForm.valid && this.TruePassword){
        // add DR data
        let doctor : Doctor = { 
          id: 0, 
          fname: this.user.fname, 
          lname:this.user.lname,
          birthDate: this.user.birthDate,
          age: + this.user.age,
          email: this.user.email,
          phone: this.user.phone, 
          password:this.user.password, 
          category: this.user.category,
          profilePic: this.user.image,
          gender: this.user.gender,
          city: this.user.city, 
          area: this.user.area, 
          street: this.user.street, 
          buildingNumber: this.user.buildingNumber,
          doctorRating: 0
        };
  
        console.log('dr ',doctor);
          this.subscribe= this.adminService.addDoctor(doctor).subscribe({
            next: data =>
            {
              this.isRegistrationFailed = false ; 
              console.log('success to add doctor ' + data)
              setTimeout(()=> alert(doctor.fname+' '+doctor.lname+' has been added successfully'),0);
              this.router.navigateByUrl('/admin/Employees');
            }
            ,error:err=>{
              console.log('error from doctor registeration component', err)
              this.isRegistrationFailed = true ; 
              this.errorMessage = err.error;
              // Object.values(err.error.errors).map((e: any)=> e.map((x:string)=> x))
            }
          });
        }
      }else{
          if(myForm.form.controls['category'].errors != null && this.TruePassword){
          // add Other data
        let other : Other = { 
          id: 0, 
          street: this.user.street, 
          fname: this.user.fname, 
          lname:this.user.lname,
          email: this.user.email,
          phone: this.user.phone, 
          password:this.user.password, 
          area: this.user.area, 
          birthDate: this.user.birthDate,
          buildingNumber: this.user.buildingNumber,
          city: this.user.city, 
          profilePic: this.user.image,
          job: this.user.job,
          age: + this.user.age
        };
  
        console.log('other ',other);
        this.subscribe= this.adminService.addOther(other).subscribe({
            next: data =>
            {
              this.isRegistrationFailed = false ; 
              console.log('success to add other ' + data)
              setTimeout(()=> alert(other.fname+' '+other.lname +' has been added successfully'),0);
            this.router.navigateByUrl('/admin/Employees');
            }
            ,error:err=>{
              console.log('error from doctor registration component', err)
              this.isRegistrationFailed = true ; 
              this.errorMessage = err.error;
              // Object.values(err.error.errors).map((e: any)=> e.map((x:string)=> x))
            }
          })
        };
      }
    }
  }

