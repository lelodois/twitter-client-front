import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {SearchResultComponent} from '../search-result/search-result.component';

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
                private eventsService: EventsService) {
    }

    ngOnInit(): void {
        //       this.modal.modal('hide');
    }


    ngAfterViewInit() {
        this.modal = $(this.rootNode.nativeElement).find('#modal');
    }

    search(text: string) {
        this.searchResultComponent.start();
        this.modal.modal('show');
    }

}
