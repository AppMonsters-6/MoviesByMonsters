import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {
  isConfirmed: boolean = false;
  movie!: Movie;
  date!: Date;
  status: string = "";
  public myForm!: FormGroup;


  constructor(private service: MovieService, private route: ActivatedRoute) { 
    this.movie = new Movie(0,'','','','','','','',new Date(0));
    this.createForm();
  }

  ngOnInit(): void {
    console.log("In ngOnInit()")
    this.route.params.subscribe((parameters)=>
    {
        this.service.getMovie(parseInt(parameters['id'])).subscribe((x)=>
        {
          this.movie = x? x: null;
          //this.date=this.jsonToDate(new Date(this.movie.releaseDate));
        });
    });
  }

  createForm()
  {
    this.myForm=new FormGroup({
      movieName: new FormControl(null, [Validators.required]),
      rating: new FormControl(null, [Validators.required, Validators.min(0.0), Validators.max(10.0)]),
      genre: new FormControl(null, [Validators.required]),
      overview: new FormControl(null, [Validators.required]),
      duration: new FormControl(null, [Validators.required]),
      quality: new FormControl(null, [Validators.required]),
      imagePath: new FormControl(null, [Validators.required]),
      releaseDate: new FormControl(new Date(0), [Validators.required])
    });
  }

  mySubmit(): void
  {
    //this.movie.releaseDate=this.date;
    this.status=`Name ${this.movie.movieName} Rating ${this.movie.rating} Genre ${this.movie.genre} Overview ${this.movie.overview} Duration ${this.movie.duration} Quality ${this.movie.quality} ImagePath ${this.movie.imagePath} Release Date ${this.movie.releaseDate}`;
    this.service.modMovie(this.movie).subscribe((x)=>{console.log(x)});
  }

  myReset()
  {
    this.toggleConfirmed()
  }
  toggleConfirmed()
  {
    if(this.myForm.valid)
    {
      this.isConfirmed=!this.isConfirmed;
    }
  }

  // jsonToDate(date: Date): Date 
  // {
  //   date.setDate(date.getDate());
  //   return date;
  // }

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
