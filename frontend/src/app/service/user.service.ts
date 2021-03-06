import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const baseUrl ='https://nest-app-1.herokuapp.com';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private route : Router) { }

  run(){
    return this.http.get(baseUrl);
  }
  test(){
    return this.http.get(baseUrl+'/user/person');
  }

}
