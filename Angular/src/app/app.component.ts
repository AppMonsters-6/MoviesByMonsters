import { Component, OnInit } from '@angular/core';
//import { MovieListComponent } from './crud/movie-list/movie-list.component';
//import { Movie } from './model/movie';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: MovieService) {}

  ngOnInit(): void {
    
  }
  
}
