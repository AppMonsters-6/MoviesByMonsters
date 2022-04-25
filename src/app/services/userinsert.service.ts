import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserinsertService {

  private baseurl: string = 'http://localhost:8087/users/';
  private httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', 'http://localhost:4200'); 
  constructor(private httpClient: HttpClient) { }
  addUser(user: Users): Observable<object> {
    return this.httpClient.post(`${this.baseurl}` + 'add', user, {headers: this.httpHeaders});
  }
}
