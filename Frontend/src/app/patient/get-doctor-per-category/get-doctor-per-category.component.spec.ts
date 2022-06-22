import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDoctorPerCategoryComponent } from './get-doctor-per-category.component';

describe('GetDoctorPerCategoryComponent', () => {
  let component: GetDoctorPerCategoryComponent;
  let fixture: ComponentFixture<GetDoctorPerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDoctorPerCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDoctorPerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
