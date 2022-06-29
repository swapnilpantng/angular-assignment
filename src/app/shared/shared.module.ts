import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModule } from './my-material.module';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/components/messages/messages.component';
import { ShowComponent } from './components/show/show.component';
import { RouterModule } from '@angular/router';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const modules = [
  MyMaterialModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule
]

@NgModule({
  declarations: [MessagesComponent, ShowComponent],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ...modules,
  ],
  exports: [
    TranslateModule,
    MessagesComponent,
    ShowComponent,
    ...modules
  ]
})
export class SharedModule {

}
