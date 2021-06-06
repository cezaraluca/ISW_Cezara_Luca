import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { CityComponent } from './city/city.component';


const routes: Routes = [
{ path:'restaurant',component:RestaurantComponent },
{ path:'city',component:CityComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }