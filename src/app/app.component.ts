import {Component, OnInit} from '@angular/core';
import {EventsService} from './provider/service/events.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'app';
    errorMessage: String = undefined;

    ngOnInit(): void {
        EventsService.loginEvents.subscribe(
            message => this.errorMessage = message);
    }

}
