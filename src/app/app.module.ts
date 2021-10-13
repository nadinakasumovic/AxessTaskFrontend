import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersDetailsComponent } from './suppliers-details/suppliers-details.component';
import {OrdersComponent} from "./orders/orders.component";
import { OrdersDetailsComponent } from './orders-details/orders-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    SuppliersComponent,
    SuppliersDetailsComponent,
    OrdersComponent,
    OrdersDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
