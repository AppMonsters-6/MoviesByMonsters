import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieByName!: Movie;

  constructor(private route: ActivatedRoute, private service: MovieService, private router: Router) { }
  releaseDate!:Date;
  movie!:Movie;
  available:boolean=false;
  trailer!: string;
  movies!: Movie[];
  ngOnInit(): void {
    this.service.getMovieNames().subscribe((x: any) => {this.movies = x })
    this.route.params.subscribe((m: any)=> {
      let id = parseInt(m['id']);
      this.service.getMovie(id).subscribe((movieDetail)=> {
        if(movieDetail) {
          this.available=true;
          this.releaseDate=this.jsonToDate(new Date(movieDetail.releaseDate));
          this.trailer=movieDetail.trailerLink;
          this.movie=movieDetail;
        }
      })
    })
  }

  byName(event: any): any {
    console.log(event.target.value);
    let selectedMovie = event.target.value;
    this.movieByName = this.movies.filter((x) => {return selectedMovie === x.movieName})[0];
    this.router.navigate([`/movie/${this.movieByName.id}`])
  }
  
  jsonToDate(date: Date): Date 
  {
    date.setDate(date.getDate());
    return date;
  }
  
}
