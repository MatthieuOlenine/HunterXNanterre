import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomathsequenceComponent } from './nomathsequence.component';

describe('NomathsequenceComponent', () => {
  let component: NomathsequenceComponent;
  let fixture: ComponentFixture<NomathsequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomathsequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomathsequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
