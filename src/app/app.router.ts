import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SearchComponent} from './components/home/search.component';

export const APP_ROUTERS: ModuleWithProviders =
    RouterModule.forRoot(
        [
            {
                path: '', component: SearchComponent
            }
        ], {useHash: false}
    );