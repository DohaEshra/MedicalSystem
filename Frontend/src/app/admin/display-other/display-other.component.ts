import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Other } from 'src/app/_Models/other';

@Component({
  selector: 'app-display-other',
  templateUrl: './display-other.component.html',
  styleUrls: ['./display-other.component.css']
})
export class DisplayOtherComponent implements OnInit {

  other: Other = new Other();

  constructor(public route: ActivatedRoute, public OServ: DoctorService) { }

  ngOnInit(): void {
    let id;
    this.route.params.subscribe(
      a => {
        id = a['id'];
        this.OServ.getOtherById(id).subscribe({
          next: data => {
            this.other = data;
            console.log(this.other)
          }
        })
      }
    )
  }

}
