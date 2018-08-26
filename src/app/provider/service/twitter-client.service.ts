import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from '../../../../node_modules/rxjs/Observable';
import {Search} from '../model/search.model';
import {URL_SEARCH} from '../url-util.service';
import {AuthService} from './auth.service';

@Injectable()
export class TwitterClientService {

    constructor(private http: HttpClient,
                private authService: AuthService) {
    }

    search(hashtag: string): Observable<Search> {
        return this.http.post<Search>(
            URL_SEARCH, {'hashtag': hashtag}, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': this.authService.getToken()
                })
            });
    }
}
