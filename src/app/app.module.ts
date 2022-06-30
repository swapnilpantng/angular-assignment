import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShowsModule } from './features/shows/shows.module';
import { AdminModule } from './features/admin/admin.module';
import { CustomerModule } from './features/customer/customer.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from './auth.guard';
import { InMemoryDataService } from './shared/db/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SearchModule } from './features/search/search.module';
// import { appReducer } from './state/app.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ShowsModule,
    AdminModule,
    CustomerModule,
    StoreModule.forRoot({
      // "root": appReducer
    }),
    EffectsModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true}
    ),
    SearchModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
