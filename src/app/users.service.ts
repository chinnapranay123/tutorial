import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
url="http://localhost:3000/Users"

  constructor(private http:HttpClient) { }
  getPosts()
  {
    return this.http.get(this.url);
  }
}
