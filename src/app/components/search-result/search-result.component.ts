import {Component, Input} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {TwitterClientService} from '../../provider/service/customer.service';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

    @Input()
    ativo = false;

    constructor(private eventsService: EventsService,
                private twittwerClientService: TwitterClientService) {
    }


    save() {
    }

    start() {
        this.ativo = true;
    }
}
