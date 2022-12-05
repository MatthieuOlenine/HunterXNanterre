import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qrcode1Component } from './qrcode1.component';

describe('Qrcode1Component', () => {
  let component: Qrcode1Component;
  let fixture: ComponentFixture<Qrcode1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Qrcode1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Qrcode1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
