import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueLoginDoor21980Component } from './bluelogindoor.component';

describe('Qrcode2Component', () => {
  let component: BlueLoginDoor21980Component;
  let fixture: ComponentFixture<BlueLoginDoor21980Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueLoginDoor21980Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueLoginDoor21980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
