import {Component, OnInit} from '@angular/core';
import {Teachers} from '../resources/teachers';
import {TeachersService} from '../services/teachers.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
      teachers: any;
      constructor(private teachers_service: TeachersService){}

      ngOnInit() {

        this.teachers_service.getAll().subscribe(data => {
            this.teachers = data;
        });
      }


}
