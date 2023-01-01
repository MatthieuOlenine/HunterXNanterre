import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleLoginDoor01231Component } from './purplelogindoor.component';

describe('Qrcode3Component', () => {
  let component: PurpleLoginDoor01231Component;
  let fixture: ComponentFixture<PurpleLoginDoor01231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurpleLoginDoor01231Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpleLoginDoor01231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
