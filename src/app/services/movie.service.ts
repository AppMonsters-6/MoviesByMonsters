import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private BaseUrl:string = "http://localhost:8087/movies/";
  private httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', 'http://localhost:4200'); 

  movieGenre!: any;
  constructor(private http: HttpClient) { }

  getMovies():Observable<any> {
    return this.http.get(`${this.BaseUrl}`+"collection");
  }

  getMovieNames(): Observable<any> {
    return this.http.get(`${this.BaseUrl}` + "movieNames");
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.BaseUrl}movie/${id}`);
  }

  getMovieName(): Observable<any> {
    return this.http.get(`${this.BaseUrl}` + "findByName");
  }

  addMovie(movie: Movie): Observable<Object> {
    return this.http.post(`${this.BaseUrl}` + "add", movie, {headers: this.httpHeaders});
  }

  modMovie(movie: Movie): Observable<Object> {
    return this.http.put(`${this.BaseUrl}` + "update", movie, {headers: this.httpHeaders});
  }

  delMovie(id: number): Observable<Object> {
    return this.http.delete(`${this.BaseUrl}remove/${id}`)
  }

}
