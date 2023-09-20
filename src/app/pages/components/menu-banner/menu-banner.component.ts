import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-banner',
  templateUrl: './menu-banner.component.html',
  styleUrls: ['./menu-banner.component.css'],
})
export class MenuBannerComponent {
  menuItems = ['Games', 'Hardware', 'Services', 'News', 'Shop', 'Support'];
}
