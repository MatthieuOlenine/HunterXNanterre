import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowLoginDoor73202Component } from './yellowlogindoor.component';

describe('Qrcode4Component', () => {
  let component: YellowLoginDoor73202Component;
  let fixture: ComponentFixture<YellowLoginDoor73202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowLoginDoor73202Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowLoginDoor73202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
