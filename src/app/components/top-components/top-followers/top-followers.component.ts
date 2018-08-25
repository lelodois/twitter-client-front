import {Component} from '@angular/core';
import {TwitterClientTopService} from '../../../provider/service/twitter-client-top.service';
import {EventsService} from '../../../provider/service/events.service';
import {Top} from '../../../provider/model/top.model';
import {Observable} from '../../../../../node_modules/rxjs/Rx';
import {TopBaseComponent} from '../top-base.component';

@Component({
    selector: 'app-top-followers',
    templateUrl: './top-followers.component.html',
    styleUrls: ['./top-followers.component.scss']
})
export class TopFollowersComponent extends TopBaseComponent {

    constructor(private twittwerTopService: TwitterClientTopService,
                eventsService: EventsService) {
        super(eventsService);
    }

    protected getObservableTop(): Observable<Top[]> {
        return this.twittwerTopService.getTopByName('followers');
    }


}
