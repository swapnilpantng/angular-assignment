import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-assignment';
  // user!: { loggedInUser: string };

  constructor(
    private router: Router
  ){
  }

  ngOnInit(): void {
    // this.user = { loggedInUser: 'John Steve'}; // Defining static value for demo
  }

  goto(route: string) {
    this.router.navigateByUrl(route);
  }
}
