import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  canActivate(): boolean {
    // return true; 
    let item = sessionStorage.getItem('islogin');
    if(item && JSON.parse(item)){
      return false;
    } else {
      return true;
    }
  }
}
