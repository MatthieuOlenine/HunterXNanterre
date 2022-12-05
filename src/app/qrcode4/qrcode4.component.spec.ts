import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qrcode4Component } from './qrcode4.component';

describe('Qrcode4Component', () => {
  let component: Qrcode4Component;
  let fixture: ComponentFixture<Qrcode4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Qrcode4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Qrcode4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
