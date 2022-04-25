import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModDelComponent } from './movie-mod-del.component';

describe('MovieModDelComponent', () => {
  let component: MovieModDelComponent;
  let fixture: ComponentFixture<MovieModDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieModDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieModDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
