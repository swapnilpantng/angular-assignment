import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './components/review/review.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ReviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ReviewComponent]
})
export class ReviewModule { }
