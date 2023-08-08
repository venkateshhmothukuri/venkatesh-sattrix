import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  canActivate(): boolean {
    // return true; 
    let item = sessionStorage.getItem('islogin');
    if(item && JSON.parse(item)){
      return true;
    } else {
      return false;
    }
  }
}
