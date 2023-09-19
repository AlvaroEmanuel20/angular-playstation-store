import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeModule } from './pages/home/home.module';
import { ProductModule } from './pages/product/product.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
