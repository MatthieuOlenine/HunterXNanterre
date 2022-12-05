import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalsecompasswayComponent } from './falsecompassway.component';

describe('FalsecompasswayComponent', () => {
  let component: FalsecompasswayComponent;
  let fixture: ComponentFixture<FalsecompasswayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalsecompasswayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalsecompasswayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
