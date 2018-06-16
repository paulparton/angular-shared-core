import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details.component';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';
import { userDetailsModuleConfiguration } from './user-details.module.config';
import { UserDetailsMobileAppEffects } from './effects/user-details-mobileapp.effects.';

export interface FeatureModuleConfig {
  effects: any[];
}

@NgModule({
  ...userDetailsModuleConfiguration,
  imports: [
    ...userDetailsModuleConfiguration.imports,
    EffectsModule.forFeature([
      UserDetailsMobileAppEffects
    ])
  ]
})
export class UserDetailsModule {
}
