import { UserDetailsComponent } from './user-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';


export const userDetailsModuleConfiguration: NgModule = {
    imports: [
        CommonModule,
        StoreModule.forFeature('userDetails', reducers.userDetails),
    ],
    declarations: [
        UserDetailsComponent
    ],
    providers: [],
    exports: [
        UserDetailsComponent
    ]
};
