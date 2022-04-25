import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  private baseUrl: string = 'http://localhost:8087/users/';
  private httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', 'http://localhost:4200'); 

  constructor(private httpclient: HttpClient) { }
  getUserDetails(EmailId: string): Observable<any> {
    //let foo = this.httpclient.get(`${this.baseUrl}byemail?email=${EmailId}`, {responseType: 'text'});
    //console.log(foo);
    return this.httpclient.get(`${this.baseUrl}byemail?email=${EmailId}`);
    //return foo;
    //let bar = foo.toString();
    //console.log(typeof(foo) + " is the type of foo");
    //return foo;
    //return this.httpclient.get(`${this.baseUrl}byemail?email=${EmailId}`);
  }
}
