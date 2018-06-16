import { UserDetailsComponent } from './user-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { userDetailRoutes } from './user-details.routes';


export const userDetailsModuleConfiguration: NgModule = {
    imports: [
        CommonModule,
        StoreModule.forFeature('userDetails', reducers.userDetails),
        RouterModule.forChild(userDetailRoutes)
    ],
    declarations: [
        UserDetailsComponent
    ],
    providers: [],
    exports: [
        UserDetailsComponent
    ]
};
