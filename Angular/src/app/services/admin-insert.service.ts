import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin} from '../model/admin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminInsertService {

  private baseUrl: string = 'http://localhost:8087/admin/';
  private httpHeaders = new HttpHeaders()
  constructor(private httpClient: HttpClient) {}
  addAdmin(admin:Admin):Observable<Object>{
    console.log("Inserted");
    return this.httpClient.post(`${this.baseUrl}` + 'add', admin, {headers: this.httpHeaders});
  }
}
