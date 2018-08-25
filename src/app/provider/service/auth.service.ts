import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {URL_LOGIN, URL_USER} from '../url-util.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import {Token} from '../model/token.model';
import {User} from '../model/user.model';
import {Router} from '@angular/router';
import {EventsService} from './events.service';

@Injectable()
export class AuthService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic dHdjbGllbnQ6TVlTM0NSdCUwMjMxMzk5NzgyMU91YWhXdA=='
        })
    };

    constructor(private http: HttpClient,
                private router: Router) {
    }

    login(login: string, password: string): Observable<boolean> {
        const loginUrl = URL_LOGIN
            .concat('&username=').concat(login)
            .concat('&password=').concat(password);

        return this.http.post<Token>(loginUrl, {}, this.httpOptions)
            .map(result => {
                if (result && result.access_token) {
                    localStorage.setItem(
                        'token',
                        result.token_type.concat(' ').concat(result.access_token)
                    );
                    return true;
                } else {
                    EventsService.loginEvents.emit('Login ou senha inválidos');
                    return false;
                }
            }).catch((err: HttpErrorResponse) => {
                EventsService.loginEvents.emit('Login ou senha inválidos');
                return Observable.empty<HttpEvent<any>>();
            });
    }

    isLoggedUser(): Observable<boolean> {
        return this.getLoggedUser()
            .map(response => {
                    if (response && response.authenticated == true) {
                        return true;
                    } else {
                        EventsService.loginEvents.emit('Usuário não está autenticado');
                        this.router.navigate(['login']);
                        return false;
                    }
                }
            );
    }

    getLoggedUser(): Observable<User> {
        return this.http.get<User>(
            URL_USER, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                })
            }
        ).catch((err: HttpErrorResponse) => {
            EventsService.loginEvents.emit('Usuário não está autenticado');
            this.router.navigate(['login']);
            return Observable.of<User>(new User());
        });
    }

    logout() {
        localStorage.removeItem('token');
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

}