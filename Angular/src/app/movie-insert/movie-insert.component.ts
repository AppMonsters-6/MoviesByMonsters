import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-insert',
  templateUrl: './movie-insert.component.html',
  styleUrls: ['./movie-insert.component.css']
})
export class MovieInsertComponent implements OnInit {
  isConfirmed!: boolean;
  movie!: Movie;
  msg!: string;
  //console!: string;
  myForm!: FormGroup;

  constructor(private service: MovieService, private router: Router) { 
    this.movie = new Movie(0,'','','','','','','',new Date(0));
    this.msg='';
    this.createForm();
  }

  ngOnInit(): void {
   
  }

  createForm() {
    this.myForm = new FormGroup({
      movieName: new FormControl('', [Validators.required]),
      rating: new FormControl(0.0, [Validators.required, Validators.min(0.0), Validators.max(10.0)]),
      genre: new FormControl('', [Validators.required]),
      overview: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      quality: new FormControl('', [Validators.required]),
      imagePath: new FormControl('', [Validators.required]),
      releaseDate: new FormControl(new Date(0), [Validators.required])
    })
  }

  mySubmit() {
    this.movie = new Movie(this.movie.id,this.movieName?.value, this.rating?.value, this.genre?.value, this.overview?.value, this.duration?.value, this.quality?.value, this.imagePath?.value, this.releaseDate?.value);
    //console.log(this.movie);
    //this.msg=`Movie name ${this.movieName?.value} Rating ${this.rating?.value} Genre ${this.genre?.value} Overview ${this.overview?.value} Duration ${this.duration?.value} Quality ${this.quality?.value} Image Path ${this.imagePath?.value} Release Date ${this.releaseDate?.value}`
    console.log("The movie name is ", this.movieName?.value)
    this.service.addMovie(this.movie).subscribe((x) => {console.log(x)});
    this.router.navigate(['/collection']);
  }


  toggleConfirmed() {
    if(this.myForm.valid)
    {
      this.isConfirmed=!this.isConfirmed;
    }
  }

  get movieName() {
    return this.myForm.get('movieName');
  }

  get rating() {
    return this.myForm.get('rating');
  }

  get genre() {
    return this.myForm.get('genre');
  }

  get overview() {
    return this.myForm.get('overview');
  }

  get duration() {
    return this.myForm.get('duration');
  }

  get quality() {
    return this.myForm.get('quality');
  }

  get imagePath() {
    return this.myForm.get('imagePath');
  }

  get releaseDate() {
    return this.myForm.get('releaseDate');
  }

}
