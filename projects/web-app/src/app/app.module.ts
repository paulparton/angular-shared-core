import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedCoreService } from '../../../../shared-core/shared-core.service';
import { UserDetailsWebAppModule } from '../../../feature-modules/src/public_api';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'shared-core/reducers';
import { EffectsModule } from '@ngrx/effects';
import { WebAppUserEffects } from '../effects/webapp.effects';
import { RouterModule } from '@angular/router';
import { webAppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserDetailsWebAppModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      WebAppUserEffects
    ]),
    RouterModule.forRoot(webAppRoutes)
  ],
  providers: [
    SharedCoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
