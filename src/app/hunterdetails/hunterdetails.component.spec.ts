import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HunterdetailsComponent } from './hunterdetails.component';

describe('HunterdetailsComponent', () => {
  let component: HunterdetailsComponent;
  let fixture: ComponentFixture<HunterdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HunterdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HunterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
