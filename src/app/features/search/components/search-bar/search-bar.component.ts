import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  search!: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getResults() {
    this.router.navigate(['./searchpage',this.search])
  }
}
