import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInsertComponent } from './movie-insert.component';

describe('MovieInsertComponent', () => {
  let component: MovieInsertComponent;
  let fixture: ComponentFixture<MovieInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
