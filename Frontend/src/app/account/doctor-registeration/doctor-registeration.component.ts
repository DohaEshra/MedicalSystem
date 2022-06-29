import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/_Models/doctor';
import { AccountService } from '../Account.service';

@Component({
  selector: 'app-doctor-registeration',
  templateUrl: './doctor-registeration.component.html',
  styleUrls: ['./doctor-registeration.component.css']
})
export class DoctorRegisterationComponent implements OnInit {
  
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
  user : any ={ id: 0, fname:'', lname:'', age:'', email:'', address:'', phone:'', username:'', password:'', category:'',confirmPass:'',image:null};
  
  constructor(public account: AccountService , public router :Router ) { }
  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
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
    reader.onload = (_event) => { 
      this.url = reader.result;
      this.user.image = this.url; 
      //console.log("user " ,this.user)
    }
  }

   onSubmit(myForm:NgForm): void {
    console.log('fooooooooorm', myForm)

    // add DR data
    let doctor : Doctor = { 
      id: 0, 
      fname: this.user.fname, 
      lname:this.user.lname,
      birthDate: this.user.birthDate,
      age: + this.user.age,
      email: this.user.email,
      phone: + this.user.phone, 
      password:this.user.password, 
      category: this.user.category,
      profilePic: this.user.image,
      gender: this.user.gender,
      city: this.user.city, 
      area: this.user.area, 
      street: this.user.street, 
      buildingNumber: this.user.buildingNumber, 
    };

    console.log('dr ',doctor);
    if(myForm.valid && this.TruePassword){
      this.subscribe= this.account.addDoctor(doctor).subscribe({
        next: data =>
        {
          this.isRegistrationFailed = true ; 
          console.log('success to add doctor ' + data)
          alert('You have registered successfully')
          this.router.navigateByUrl('/login');
        }
        ,error:err=>{
          console.log('error from doctor registeration component', err)
          this.isRegistrationFailed = true ; 
          this.errorMessage = Object.values(err.error.errors).map((e: any)=> e.map((x:string)=> x))
        }
      });
    }
  }
}
