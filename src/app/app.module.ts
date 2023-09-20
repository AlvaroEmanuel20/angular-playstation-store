import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonComponent } from './pages/components/button/button.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { MenuBannerComponent } from './pages/components/menu-banner/menu-banner.component';
import { MenuItemComponent } from './pages/components/menu-item/menu-item.component';
import { HomeComponent } from './pages/home/home.component';
import { GameCardComponent } from './pages/home/components/game-card/game-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ButtonComponent,
    NavbarComponent,
    MenuBannerComponent,
    MenuItemComponent,
    GameCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
