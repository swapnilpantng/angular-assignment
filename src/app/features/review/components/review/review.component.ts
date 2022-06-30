import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowsService } from 'src/app/features/shows/services/shows.service';
import { IReview } from '../../interfaces/review.interface';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.less']
})
export class ReviewComponent implements OnInit {
  @Input()
  showid!: any;
  reviews!: Array<IReview>;
  aggregateRating!: number;

  constructor(private reviewService: ReviewService, private showService: ShowsService) {
  }

  ngOnInit(): void {
    this.reviewService.getReview(Number(this.showid)).subscribe(reviews => this.reviews = reviews);
  }

  numToArr(count: number){
    return new Array<number>(count);
  }

  getShow(id: number){
    this.showService.getShow(this.showid).subscribe(show => this.aggregateRating = show.rating);
  }
}
