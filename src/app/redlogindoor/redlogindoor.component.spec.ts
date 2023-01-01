import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedLoginDoor98456Component } from './redlogindoor.component';

describe('Qrcode1Component', () => {
  let component: RedLoginDoor98456Component;
  let fixture: ComponentFixture<RedLoginDoor98456Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedLoginDoor98456Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedLoginDoor98456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
