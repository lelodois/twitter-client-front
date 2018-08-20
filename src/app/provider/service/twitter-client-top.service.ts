import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Top} from '../model/top.model';

@Injectable()
export class TwitterClientTopService {

    constructor() {
    }

    number_top_1 = 50;
    number_top_2 = 75;
    number_top_3 = 45;

    getTopFollowers(): Observable<Top[]> {
        const tops = [];
        tops.push(new Top(this.number_top_1++, 'João'));
        tops.push(new Top(this.number_top_2++, 'Maria'));
        tops.push(new Top(this.number_top_3++, 'Ana'));

        return Observable.of(tops);
    }

    getTopCountries(): Observable<Top[]> {
        const tops = [];
        tops.push(new Top(this.number_top_1++, 'Brasil'));
        tops.push(new Top(this.number_top_2++, 'Eua'));
        tops.push(new Top(this.number_top_3++, 'Venezuela'));

        return Observable.of(tops);
    }

    getTopHours(): Observable<Top[]> {
        const tops = [];
        tops.push(new Top(this.number_top_1++, 'as 22 horas'));
        tops.push(new Top(this.number_top_2++, 'as 17 horas'));
        tops.push(new Top(this.number_top_3++, 'as 13 horas'));

        return Observable.of(tops);
    }

}