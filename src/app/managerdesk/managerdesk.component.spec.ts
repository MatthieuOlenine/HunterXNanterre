import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerdeskComponent } from './managerdesk.component';

describe('ManagerdeskComponent', () => {
  let component: ManagerdeskComponent;
  let fixture: ComponentFixture<ManagerdeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerdeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
