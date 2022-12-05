import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostsignalComponent } from './lostsignal.component';

describe('LostsignalComponent', () => {
  let component: LostsignalComponent;
  let fixture: ComponentFixture<LostsignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostsignalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LostsignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
