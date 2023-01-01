import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HunterboardComponent } from './hunterboard.component';

describe('HunterboardComponent', () => {
  let component: HunterboardComponent;
  let fixture: ComponentFixture<HunterboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HunterboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HunterboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
