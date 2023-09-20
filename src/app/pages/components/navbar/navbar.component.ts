import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  links = [
    { text: 'Home', link: '/' },
    { text: 'Latest', link: '/latest' },
    { text: 'Collections', link: '/collections' },
    { text: 'Deals', link: '/deals' },
    { text: 'PS5', link: '/ps5' },
    { text: 'Subscriptions', link: '/subscriptions' },
    { text: 'Browse', link: '/browse' },
  ];
}
