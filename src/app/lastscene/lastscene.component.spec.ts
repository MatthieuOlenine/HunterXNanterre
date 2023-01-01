import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastsceneComponent } from './lastscene.component';

describe('LastsceneComponent', () => {
  let component: LastsceneComponent;
  let fixture: ComponentFixture<LastsceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastsceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastsceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
