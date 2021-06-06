import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { ShowDepComponent } from './city/show-dep/show-dep.component';
import { AddEditDepComponent } from './city/add-edit-dep/add-edit-dep.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ShowEmpComponent } from './restaurant/show-emp/show-emp.component';
import { AddEditEmpComponent } from './restaurant/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';

import{ HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    ShowDepComponent,
    AddEditDepComponent,
    RestaurantComponent,
    ShowEmpComponent,
    AddEditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
