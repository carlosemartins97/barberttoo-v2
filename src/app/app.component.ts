import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHome: boolean = true;

  urlWithoutMenu = [
    '/',
    '/register',
    '/page-not-found'
  ]

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dontShowHeader();
  }

  dontShowHeader() {
    this.router.events.subscribe(val => {

      if (val instanceof RoutesRecognized) {

        this.urlWithoutMenu.includes(val.state.url) ? this.isHome = true : this.isHome = false;

      }
    });
  }
}
