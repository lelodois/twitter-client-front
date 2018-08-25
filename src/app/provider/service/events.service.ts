import {EventEmitter} from '@angular/core';
import {Search} from '../model/search.model';

export class EventsService {

    static searchResult: EventEmitter<Search> = new EventEmitter<Search>(true);
    static loginEvents: EventEmitter<String> = new EventEmitter<String>(true);
}