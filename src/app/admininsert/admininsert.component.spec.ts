import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininsertComponent } from './admininsert.component';

describe('AdmininsertComponent', () => {
  let component: AdmininsertComponent;
  let fixture: ComponentFixture<AdmininsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmininsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmininsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
