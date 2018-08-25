import {Component} from '@angular/core';
import {TwitterClientTopService} from '../../../provider/service/twitter-client-top.service';
import {Top} from '../../../provider/model/top.model';
import {Observable} from '../../../../../node_modules/rxjs/Rx';
import {TopBaseComponent} from '../top-base.component';

@Component({
    selector: 'app-top-hours',
    templateUrl: './top-hours.component.html',
    styleUrls: ['./top-hours.component.scss']
})
export class TopHoursComponent extends TopBaseComponent {

    constructor(private twittwerTopService: TwitterClientTopService) {
        super();
    }

    protected getObservableTop(): Observable<Top[]> {
        return this.twittwerTopService.getTopByName('hours');
    }
}
