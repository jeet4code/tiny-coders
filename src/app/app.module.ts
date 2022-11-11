import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanComponent } from './pages/scan/scan.component';
import { ProductsComponent } from './pages/products/products.component';
import { ImageCaptureComponent } from './common/image-capture/image-capture.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './common/header/header.component';
import { FoodDietComponent } from './pages/food-diet/food-diet.component';
import { OrganicTipsComponent } from './pages/organic-tips/organic-tips.component';

@NgModule({
  declarations: [
    AppComponent,
    ScanComponent,
    ProductsComponent,
    ImageCaptureComponent,
    LandingComponent,
    HeaderComponent,
    FoodDietComponent,
    OrganicTipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
