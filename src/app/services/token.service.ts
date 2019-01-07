import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://localhost:8000/api/auth/login'
  };

  constructor() { }




  handle(token) {
    this.set(token);
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {

    const token = localStorage.getItem('token');
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) ? true : false;
      }
    }

    return false;

  }

  payload(token) {
   const payload =  token.toString().split('.')[1];
   return this.decode(payload);
  }


   decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {

    return this.isValid();
  }


}
