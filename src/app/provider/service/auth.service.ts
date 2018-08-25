import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {URL_LOGIN} from '../url-util.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import {Token} from '../model/token.model';

@Injectable()
export class AuthService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic dHdjbGllbnQ6TVlTM0NSdCUwMjMxMzk5NzgyMU91YWhXdA=='
        })
    };

    constructor(private http: HttpClient) {
    }

    login(login: string, password: string): Observable<boolean> {
        const loginUrl = URL_LOGIN
            .concat('&username=').concat(login)
            .concat('&password=').concat(password);

        return this.http.post<Token>(loginUrl, {}, this.httpOptions)
            .map(result => {
                if (result && result.access_token) {
                    const token = result.token_type.concat(' ').concat(result.access_token);
                    localStorage.setItem('token', token);
                    return true;
                }
                return false;
            })
            .catch((err: HttpErrorResponse) => {
                alert('Ocorreu um erro desconhecido ao logar...' + err);
                return Observable.empty<HttpEvent<any>>();
            });
    }

    logout() {
        localStorage.removeItem('token');
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    isLogged() {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        return false;
    }

}