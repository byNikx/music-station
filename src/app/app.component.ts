import {
  Component, Inject, Renderer2, OnInit,
} from '@angular/core';
import 'simplebar';
import { DOCUMENT } from '@angular/common';
import { NavigationStart, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'music-station';
  isDarkTheme = false;
  showPageLoading: boolean;
  navStart: Observable<boolean>;
  navEnd: Observable<boolean>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.navStart = this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(e => true)
    );

    this.navEnd = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => false)
    );
  }

  ngOnInit(): void {
    this.navStart.subscribe(e => this.showPageLoading = e);
    this.navEnd.subscribe(e => this.showPageLoading = e);
  }

  toggleTheme() {
    const body = this.document.querySelector('body');
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.renderer.removeClass(body, 'light-theme');
      this.renderer.addClass(body, 'dark-theme');
    } else {
      this.renderer.removeClass(body, 'dark-theme');
      this.renderer.addClass(body, 'light-theme');
    }
  }
}
