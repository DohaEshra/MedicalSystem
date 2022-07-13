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

  myUploader(record: Record, event: any) {
    console.log('record', event)
    var x = this.patient.records.indexOf(record);
    alert(event.files[0].name + ' uploaded successfully');
  }

  errorInUploading(event: any) {
    alert('unfortunately, ' + event.files[0].name + ' didn\'t upload successfully');
  }

  //indicate to searching by id
  setIndicatorForId() {
    this.Indicator = 1;
  }
  //indicate to searching by name 
  setIndicatorForName() {
    this.Indicator = 2;
  }

  showDialog() {
    this.fileDialogVisibility = true;
  }

  hideDialog() {
    this.fileDialogVisibility = false;
  }


  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
