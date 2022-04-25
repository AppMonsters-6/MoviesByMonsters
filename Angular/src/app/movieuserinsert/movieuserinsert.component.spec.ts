import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieuserinsertComponent } from './movieuserinsert.component';

describe('MovieuserinsertComponent', () => {
  let component: MovieuserinsertComponent;
  let fixture: ComponentFixture<MovieuserinsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieuserinsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieuserinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
