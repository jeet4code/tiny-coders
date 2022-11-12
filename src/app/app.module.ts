import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanComponent } from './pages/scan/scan.component';
import { ProductsComponent } from './pages/products/products.component';
import { ImageCaptureComponent } from './common/image-capture/image-capture.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './common/header/header.component';
import { FoodDietComponent } from './pages/food-diet/food-diet.component';
import { OrganicTipsComponent } from './pages/organic-tips/organic-tips.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import { ProfileComponent } from './common/profile/profile.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScanComponent,
    ProductsComponent,
    ImageCaptureComponent,
    LandingComponent,
    HeaderComponent,
    FoodDietComponent,
    OrganicTipsComponent,
    ProfileComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
