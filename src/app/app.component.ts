import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth.service';
import {TokenService} from './services/token.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    public loggedIn: boolean;


    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private auth: AuthService, private token: TokenService, private route: Router
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
        this.auth.authStatus.subscribe(value => this.loggedIn = value);
        console.log(this.token.loggedIn());
    }

    logout() {
        this.token.remove();
        this.auth.changeAuthStatus(false);
        console.log(this.token.isValid());
        // this.route.navigate(['login']);

    }

    home() {
        this.route.navigate(['home']);
    }

    login() {
        this.route.navigate(['login']);
    }

     list() {
        this.route.navigate(['list']);
    }
}
