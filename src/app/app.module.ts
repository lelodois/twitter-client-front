import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {APP_ROUTERS} from './app.router';
import {SearchComponent} from './components/search/search.component';
import {RouterModule} from '@angular/router';
import {EventsService} from './provider/service/events.service';
import {TwitterClientService} from './provider/service/twitter-client.service';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {FormsModule} from '@angular/forms';
import {TopFollowersComponent} from './components/top-components/top-followers/top-followers.component';
import {TopCoutriesComponent} from './components/top-components/top-coutries/top-coutries.component';
import {TopHoursComponent} from './components/top-components/top-hours/top-hours.component';
import {TwitterClientTopService} from './provider/service/twitter-client-top.service';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {AuthService} from './provider/service/auth.service';
import {AuthGuard} from './provider/service/auth-guard.service';

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
            HomeComponent,
            LoginComponent,
            UserListComponent
        ],
    exports:
        [
            SearchComponent,
            SearchResultComponent,
            TopFollowersComponent,
            TopCoutriesComponent,
            TopHoursComponent,
            LoginComponent,
            UserListComponent
        ],

    providers:
        [
            AuthService,
            AuthGuard,
            EventsService,
            TwitterClientService,
            TwitterClientTopService
        ],
    bootstrap:
        [
            AppComponent
        ]
})
export class AppModule {
}
