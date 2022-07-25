import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Patient } from 'src/app/_Models/patient';
import { Record } from 'src/app/_Models/record';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-file-upadate-or-delete',
  templateUrl: './file-upadate-or-delete.component.html',
  styleUrls: ['./file-upadate-or-delete.component.css']
})
export class FileUpadateOrDeleteComponent implements OnInit {

  Indicator = 0;
  ID: any = "";
  Name = ""
  patientsList: Patient[] = [];
  patientsFilteredByName: any = [];
  uploadedFiles: any[] = [];
  patient = new Patient();
  fileDialogVisibility = false;
  sub: Subscription | null = null;
  myAttachedFile='';
  constructor(public adminService: AdminService) {}

  ngOnInit(): void {
    this.sub = this.adminService.getPatients().subscribe({
      next: data => {
        this.patientsList = data
        console.log('success to add patient ', data)
      }
      , error: err => {
        console.log('error from admin update files component', err)
        // this.errorMessage = err.error;
        // Object.values(err.error.errors).map((e: any)=> e.map((x:string)=> x))
      }
    })
  }

  SelectedPatientById(ID: number) {
    for (let i = 0; i < this.patientsList.length; i++) {
      if (this.patientsList[i].id == ID) {
        this.patient = this.patientsList[i];
        this.ID = ID;
        // console.log('patientById', this.patient)
        return this.patient;
      }
    }
    this.patient = new Patient()
    return this.patient;
  }

  SelectedPatientByName(name: string) {
    for (let i = 0; i < this.patientsList.length; i++) {
      if (this.patientsList[i].fname.toLowerCase() == name.toLowerCase() || this.patientsList[i].lname.toLowerCase() == name.toLowerCase()) {
        this.patient = this.patientsList[i];
        this.Name = name;
        // console.log('patientById', this.patient)
        return this.patient;
      }
    }
    this.patient = new Patient()
    return this.patient;
  }

  // myUploader(record: Record, event: any) {
  //   console.log('record', event)
  //   var x = this.patient.records.indexOf(record);
  //   alert(event.files[0].name + ' uploaded successfully');
  // }

  // errorInUploading(event: any) {
  //   alert('unfortunately, ' + event.files[0].name + ' didn\'t upload successfully');
  // }

  UploadFiles(record: any, event: any, i:number) {
    const formData = new FormData();
    formData.append('fileKey', event.files[0], event.files[0].name);

    this.adminService.uploadFile(record, formData).subscribe({
      next: data => {
        alert(event.files[0].name + ' uploaded successfully');
        this.patient.records[i].attached_files = data.attached_files;
      },
      error: err => {
        console.log('error in uploading', err);
        alert('unfortunately, ' + event.files[0].name + ' didn\'t upload successfully');
      }
    })
    // console.log('no')
    // var xmlHttp = new XMLHttpRequest()
    // xmlHttp.open("POST", 'https://localhost:7089/api/Record/AddFile/' + record.pid + '/' + record.did + '/' + record.date + '/' + record.file_description + '/' + record.fno + '/' + this.labTechnicianId );
    // xmlHttp.setRequestHeader('Authorization', `Bearer ${this.accountService.getToken()}`);
    // console.log(xmlHttp)
  }

  deleteFile(record:any){
    var confirmation = confirm("Are you sure you want to delete this file ?");
    if(confirmation){
      this.adminService.DeleteFile(record).subscribe({
        next: data =>{
          record.testType = "F";
          var x = this.patient.records.indexOf(record);
          this.patient.records.splice(x, 1);
          alert('File deleted successfully');
          this.ID =''
        },
        error: err => { 
          console.log('error in uploading',err);
          alert('unfortunately, file didn\'t deleted successfully');
      }
    })
  }
  }

  //indicate to searching by id
  setIndicatorForId() {
    this.Indicator = 1;
  }
  //indicate to searching by name 
  setIndicatorForName() {
    this.Indicator = 2;
  }

  showDialog(record: any) {
    this.fileDialogVisibility = true;
    this.myAttachedFile = record;
  }

  hideDialog() {
    this.fileDialogVisibility = false;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
