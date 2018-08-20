import {EventEmitter, Injectable} from '@angular/core';
import {Search} from '../model/search.model';

@Injectable()
export class EventsService {

    private readonly _searchResult: EventEmitter<Search> = new EventEmitter<Search>(true);

    get searchResult(): EventEmitter<Search> {
        return this._searchResult;
    }
}