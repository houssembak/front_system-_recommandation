import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly uri="http://localhost:8080/api/utilisateurs";
  constructor(private http:HttpClient) { }

  login(loginInfo:any){
    return this.http.post(this.uri,loginInfo)
  }
  signup(loginInfo:any){
    return this.http.post(this.uri,loginInfo);
  }
}
