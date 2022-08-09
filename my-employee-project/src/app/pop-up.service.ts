import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { POPUP } from './pop-up.model';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  url = 'https://localhost:7097/api';
  rootUrl: string;

  constructor(private httpclient: HttpClient) { }
  update(Email:any, Date:any): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpclient.get<string>(this.url + '/Email/SendEmail?Email='+Email+'&Date='+Date, httpOptions);
  }
}
