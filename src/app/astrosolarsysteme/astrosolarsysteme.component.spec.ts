import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrosolarsystemeComponent } from './astrosolarsysteme.component';

describe('AstrosolarsystemeComponent', () => {
  let component: AstrosolarsystemeComponent;
  let fixture: ComponentFixture<AstrosolarsystemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstrosolarsystemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrosolarsystemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
