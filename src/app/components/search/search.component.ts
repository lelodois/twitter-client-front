import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {SearchResultComponent} from '../search-result/search-result.component';
import {TwitterClientService} from '../../provider/service/twitter-client.service';

declare var $: any;

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

    modal = null;

    @ViewChild('searchResultComponent')
    searchResultComponent: SearchResultComponent;

    constructor(private rootNode: ElementRef,
                private twitterService: TwitterClientService,
                private eventsService: EventsService) {
    }

    ngOnInit(): void {
    }


    ngAfterViewInit() {
        this.modal = $(this.rootNode.nativeElement).find('#modal');
    }

    search(text: string) {
        this.twitterService.search(text)
            .subscribe(searchResultItem => {
                this.searchResultComponent.start(searchResultItem);
                this.modal.modal('show');

                this.eventsService.searchResult.emit(searchResultItem);
            });
    }

}
