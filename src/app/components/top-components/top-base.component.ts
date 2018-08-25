import {EventsService} from '../../provider/service/events.service';
import {Observable} from '../../../../node_modules/rxjs';
import {Top} from '../../provider/model/top.model';
import {OnInit} from '@angular/core';

export class TopBaseComponent implements OnInit {

    tops: Top[] = undefined;

    ngOnInit() {
        this.loadTops();
        EventsService.searchResult
            .subscribe(() => this.loadTops());
    }

    protected getObservableTop(): Observable<Top[]> {
        return Observable.of();
    }

    private loadTops() {
        this.getObservableTop()
            .subscribe(top => this.tops = top);
    }


}
