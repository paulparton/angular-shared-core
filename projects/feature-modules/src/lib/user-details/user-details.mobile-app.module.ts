import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
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
export class UserDetailsMobileAppModule {
}
