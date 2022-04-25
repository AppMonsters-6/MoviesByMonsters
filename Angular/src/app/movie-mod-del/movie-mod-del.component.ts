import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-mod-del',
  templateUrl: './movie-mod-del.component.html',
  styleUrls: ['./movie-mod-del.component.css']
})
export class MovieModDelComponent implements OnInit {
  movies!: Movie[];
  name!: string;
  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.getMovies().subscribe((x) => {this.movies = x});
    console.log("abcde");
  }

  delMovie(event: any, index: any) 
  {  
    let id=this.movies[index].id;
    
    this.service.delMovie(id)  
      .subscribe((data: any) => 
      {  
        console.log(data);  
        this.ngOnInit();
      });
  }

}
