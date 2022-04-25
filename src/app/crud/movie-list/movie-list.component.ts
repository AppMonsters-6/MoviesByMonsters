import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
//import { GetByMovieNameComponent } from 'src/app/get-by-movie-name/get-by-movie-name.component';
//import { GetByMovieNameComponent } from 'src/app/get-by-movie-name/get-by-movie-name.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies!: Movie[];
  source: any;
  options: string[] = [];
  public myForm!: FormControl;
  movieNames!: string[];
  filteredOptions!: Observable<string[]>;
  myControl = new FormControl();
  names!: string;
  movieGenre!: any;
  movieId!: number;
  idByName!: number;
  nameOfMovie!: string;
  movieByName!: Movie;
  link!: string;
  constructor(private service: MovieService, private route: Router) {
    
  }

    ngOnInit(): void {
    this.service.getMovies().subscribe((x) => { this.movies = x });
    this.service.getMovieNames().subscribe((x: any) => {this.movieNames = x })
    console.log('Movie details displayed');
    console.log(JSON.stringify(this.movies));
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  byName(event: any): any {
    console.log(event.target.value);
    let selectedMovie = event.target.value;
    this.movieByName = this.movies.filter((x) => {return selectedMovie === x.movieName})[0];
    this.route.navigate([`/movie/${this.movieByName.id}`])
  }
  
  






}
