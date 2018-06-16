import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedCoreService } from 'shared-core/shared-core.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WebAppUserEffects } from '../../../web-app/src/effects/webapp.effects';
import { reducers } from '../../../../shared-core/reducers';
import { UserDetailsMobileAppModule } from '../../../feature-modules/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserDetailsMobileAppModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      WebAppUserEffects
    ])
  ],
  providers: [
    SharedCoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
