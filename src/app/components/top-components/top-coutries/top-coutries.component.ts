import {Component} from '@angular/core';
import {TwitterClientTopService} from '../../../provider/service/twitter-client-top.service';
import {TopBaseComponent} from '../top-base.component';
import {Top} from '../../../provider/model/top.model';
import {Observable} from '../../../../../node_modules/rxjs/Rx';

@Component({
    selector: 'app-top-coutries',
    templateUrl: './top-coutries.component.html',
    styleUrls: ['./top-coutries.component.scss']
})
export class TopCoutriesComponent extends TopBaseComponent {

    constructor(private twittwerTopService: TwitterClientTopService) {
        super();
    }

    protected getObservableTop(): Observable<Top[]> {
        return this.twittwerTopService.getTopByName('countries');
    }

}
