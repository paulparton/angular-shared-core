import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedCoreService } from '../../../../shared-core/shared-core.service';
import { UserDetailsWebAppModule } from '../../../feature-modules/src/public_api';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'shared-core/reducers';
import { EffectsModule } from '@ngrx/effects';
import { WebAppUserEffects } from '../effects/webapp.effects';

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
    ])
  ],
  providers: [
    SharedCoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
