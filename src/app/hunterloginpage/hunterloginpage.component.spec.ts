import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HunterloginpageComponent } from './hunterloginpage.component';

describe('HunterloginpageComponent', () => {
  let component: HunterloginpageComponent;
  let fixture: ComponentFixture<HunterloginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HunterloginpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HunterloginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
