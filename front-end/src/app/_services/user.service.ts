import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  signup(data:
    any
  ): Observable<any> {
    return this.http.post(
      'http://localhost:3000/user/signup',
      data,
      this.httpOptions
    )
  }
}
