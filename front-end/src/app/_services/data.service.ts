import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}
  //get all posts
  getAll(): Observable<any>{
    return this.http.get("http://localhost:3000/getAll")
  }
  //add new news
  addNew(add:any){
return this.http.post("http://localhost:3000/addPost",add)
  }
}
