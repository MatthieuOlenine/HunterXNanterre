import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qrcode3Component } from './qrcode3.component';

describe('Qrcode3Component', () => {
  let component: Qrcode3Component;
  let fixture: ComponentFixture<Qrcode3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Qrcode3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Qrcode3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
