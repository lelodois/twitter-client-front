import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {SearchResultComponent} from '../search-result/search-result.component';
import {TwitterClientService} from '../../provider/service/twitter-client.service';
import {AuthService} from '../../provider/service/auth.service';

declare var $: any;

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {

    modal = null;

    @ViewChild('searchResultComponent')
    searchResultComponent: SearchResultComponent;

    constructor(private rootNode: ElementRef,
                private twitterService: TwitterClientService) {
    }

    ngAfterViewInit() {
        this.modal = $(this.rootNode.nativeElement).find('#modal');
    }

    search(text: string) {
        this.twitterService.search(text)
            .subscribe(searchResultItem => {
                this.searchResultComponent.start(searchResultItem);
                this.modal.modal('show');

                EventsService.searchResult.emit(searchResultItem);
            });
    }

}
