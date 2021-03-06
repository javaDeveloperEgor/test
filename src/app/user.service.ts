import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;
  private user;

  constructor() {
    this.isUserLoggedIn =false;
    }

  setUserLoggedIn(UserLoggedIn){
    this.isUserLoggedIn= UserLoggedIn;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
