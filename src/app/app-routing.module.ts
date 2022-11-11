import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDietComponent } from './pages/food-diet/food-diet.component';
import { LandingComponent } from './pages/landing/landing.component';
import { OrganicTipsComponent } from './pages/organic-tips/organic-tips.component';
import { ProductsComponent } from './pages/products/products.component';
import { ScanComponent } from './pages/scan/scan.component';
import {ProfileComponent} from './common/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent,},
  {
    path: 'scan',
    component: ScanComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'food-diet',
    component: FoodDietComponent,
  },
  {
    path: 'organic-tips',
    component: OrganicTipsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
