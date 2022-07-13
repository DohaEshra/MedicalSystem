import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
  @Input()rating=0;
  cropwidth=0;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.cropwidth=this.rating*78/5;
  }

  ngOnInit(): void {
  }

}
