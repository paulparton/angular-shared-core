import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedCoreService } from 'shared-core/shared-core.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WebAppUserEffects } from '../effects/mobileapp.effects';
import { reducers } from '../../../../shared-core/reducers';
import { UserDetailsMobileAppModule } from '../../../feature-modules/src/public_api';
import { RouterModule } from '@angular/router';
import { mobileAppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      WebAppUserEffects
    ]),
    RouterModule.forRoot(mobileAppRoutes)
  ],
  providers: [
    SharedCoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
