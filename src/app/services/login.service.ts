import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'http://127.0.0.1:8000/api/auth';

  constructor(private http: HttpClient) { }

  authLogin(data) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}
