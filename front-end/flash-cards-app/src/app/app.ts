import { Component, signal, } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  shouldShowComponent: boolean = true; // header/footer visible by default

  constructor(private router: Router) {
    // Listen to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const lastPart = event.urlAfterRedirects.split('/').pop();
        // Hide header/footer only on login
        this.shouldShowComponent = lastPart !== '';
      });
  }
}
