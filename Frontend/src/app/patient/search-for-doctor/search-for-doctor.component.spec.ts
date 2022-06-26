import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForDoctorComponent } from './search-for-doctor.component';

describe('SearchForDoctorComponent', () => {
  let component: SearchForDoctorComponent;
  let fixture: ComponentFixture<SearchForDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchForDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
