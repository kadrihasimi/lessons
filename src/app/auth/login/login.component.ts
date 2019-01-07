import {Component, OnInit} from '@angular/core';
import {ValidationManager} from 'ng2-validation-manager';
import {HttpClient} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {LoginService} from '../../services/login.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

    form;

    public error;

    constructor(private http: HttpClient,
                private spinner: NgxSpinnerService,
                private loginservice: LoginService,
                private token: TokenService, private route: Router,
                private auth: AuthService) {
    }

    ngOnInit() {


        this.form = new ValidationManager({
            'email': 'required|email',
            'password': 'required',

        });



    }


    login() {
        if (this.form.isValid()) {

            // this.spinner.show();

            this.loginservice.authLogin(this.form.getData()).subscribe(data => {
                    this.handleResponse(data);
                    // this.spinner.hide();
                }, error => {

                    this.handleError(error);
                    // this.spinner.hide();
                }
            );
        }
    }

    handleResponse(data){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.route.navigate(['home']);
    }

    handleError(error) {
        this.error = error.error.error;
    }
}
