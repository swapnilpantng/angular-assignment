import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowListComponent } from './components/show-list/show-list.component';
import { SharedModule } from './../../shared/shared.module';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';

@NgModule({
  declarations: [
    ShowListComponent,
    ShowDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ShowListComponent]
})
export class ShowsModule { }
