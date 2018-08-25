import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../provider/service/auth.service';
import {Router} from '@angular/router';
import {EventsService} from '../../provider/service/events.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    logging = false;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        EventsService.loginEvents.subscribe(
            event => {
                if (event) {
                    this.logging = false;
                }
            }
        );
    }

    login(username: string, password: string) {
        this.logging = true;
        EventsService.loginEvents.emit(undefined);

        this.authService.login(username, password)
            .subscribe(response => {
                if (response == true) {
                    this.router.navigate(['home']);
                }
            });
    }

}
