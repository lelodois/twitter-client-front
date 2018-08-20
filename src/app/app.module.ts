import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {APP_ROUTERS} from './app.router';
import {SearchComponent} from './components/home/search.component';
import {RouterModule} from '@angular/router';
import {EventsService} from './provider/service/events.service';
import {TwitterClientService} from './provider/service/customer.service';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {ErrorInterceptorProvider} from './provider/service/errors.service';
import {FormsModule} from '@angular/forms';
import {TopFollowersComponent} from './components/top-followers/top-followers.component';
import {TopCoutriesComponent} from './components/top-coutries/top-coutries.component';
import {TopHoursComponent} from './components/top-hours/top-hours.component';

@NgModule({
    imports:
        [
            HttpClientModule,
            BrowserModule,
            RouterModule,
            FormsModule,
            NgxPaginationModule,
            APP_ROUTERS
        ],
    declarations:
        [
            AppComponent,
            SearchComponent,
            SearchResultComponent,
            TopFollowersComponent,
            TopCoutriesComponent,
            TopHoursComponent,
        ],
    exports:
        [
            SearchComponent,
            SearchResultComponent,
            TopFollowersComponent,
            TopCoutriesComponent,
            TopHoursComponent,
        ],

    providers:
        [
            EventsService,
            TwitterClientService,
            ErrorInterceptorProvider
        ],
    bootstrap:
        [
            AppComponent
        ]
})
export class AppModule {
}
