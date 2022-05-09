import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHome: boolean;

  urlWithoutMenu = [
    '/',
    '/register',
  ]

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dontShowHeader();
  }

  dontShowHeader() {
    this.urlWithoutMenu.includes(window.location.pathname) ? this.isHome = true : this.isHome = false;
  }
}
