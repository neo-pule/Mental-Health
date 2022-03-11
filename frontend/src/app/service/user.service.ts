import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const baseUrl ='http://10.10.1.103:3000';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private route : Router) { }

  run(){
    return this.http.get(baseUrl);
  }

}
