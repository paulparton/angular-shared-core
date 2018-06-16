import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { userDetailsModuleConfiguration } from './user-details.module.config';
import { UserDetailsWebAppEffects } from './effects/user-details-webapp.effects';

export interface FeatureModuleConfig {
  effects: any[];
}

@NgModule({
  ...userDetailsModuleConfiguration,
  imports: [
    ...userDetailsModuleConfiguration.imports,
    EffectsModule.forFeature([
      UserDetailsWebAppEffects
    ])
  ]
})
export class UserDetailsWebAppModule {
}
