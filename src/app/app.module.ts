import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShowsModule } from './features/shows/shows.module';
import { AdminModule } from './features/admin/admin.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { appReducer } from './state/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ShowsModule,
    AdminModule,
    StoreModule.forRoot({
      // "root": appReducer
    }),
    EffectsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
