import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SearchBarComponent,
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SearchBarComponent,
    SearchPageComponent,
  ]
})
export class SearchModule { }
