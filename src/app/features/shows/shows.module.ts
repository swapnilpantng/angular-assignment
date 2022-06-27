import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './components/show/show.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    ShowComponent,
    ShowListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShowComponent,
    ShowListComponent]
})
export class ShowsModule { }
