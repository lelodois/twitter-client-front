import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Top} from '../model/top.model';
import {URL_TOPS} from '../url-util.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import 'rxjs/add/observable/of';

@Injectable()
export class TwitterClientTopService {

    constructor(private http: HttpClient,
                private authService: AuthService) {
    }

    getTopByName(topName: string): Observable<Top[]> {
        return this.http.get<Top[]>(
            URL_TOPS.concat(topName).concat('/'),
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': this.authService.getToken()
                })
            }
        );
    }
}