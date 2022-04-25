import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginServiceService {
  private baseUrl: string = 'http://localhost:8087/admin/';
  private httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', 'http://localhost:4200'); 
  
  constructor(private httpclient:HttpClient) { }
  getAdminDetails(emailId:string):Observable<any>{
    console.log(emailId);
    return this.httpclient.get(`${this.baseUrl}byEmail?name=${emailId}`);
  }
}
