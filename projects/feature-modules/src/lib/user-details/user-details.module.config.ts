import { UserDetailsComponent } from './user-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, createFeatureSelector } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { userDetailRoutes } from './user-details.routes';
import * as fromUserDetails from './reducers/user-details.reducer';

export const userDetailsModuleConfiguration: NgModule = {
    imports: [
        CommonModule,
        StoreModule.forFeature('userDetails', fromUserDetails.reducer),
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
