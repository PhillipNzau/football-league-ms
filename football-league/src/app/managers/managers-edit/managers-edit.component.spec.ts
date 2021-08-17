import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersEditComponent } from './managers-edit.component';

describe('ManagersEditComponent', () => {
  let component: ManagersEditComponent;
  let fixture: ComponentFixture<ManagersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
