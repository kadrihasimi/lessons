import { Injectable } from '@angular/core';
import {Teachers} from '../resources/teachers';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';


@Injectable({
  providedIn: 'root'
})
export class TeachersService extends AbstractService {
  constructor(private http: HttpClient, teachers: Teachers) {
      super(); }

  getAll(){
    return this.http.get<Teachers>(this.public('api/teachers'));
  }


}
