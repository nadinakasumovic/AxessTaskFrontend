import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import {ProductsDetailsComponent} from "./products-details/products-details.component";
import {SuppliersComponent} from "./suppliers/suppliers.component";
import {SuppliersDetailsComponent} from "./suppliers-details/suppliers-details.component";
import {OrdersComponent} from "./orders/orders.component";
import {OrdersDetailsComponent} from "./orders-details/orders-details.component";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path:'products/:id',component:ProductsDetailsComponent },
  { path:'suppliers',component:SuppliersComponent },
  { path:'suppliers/:id',component:SuppliersDetailsComponent },
  { path:'orders',component:OrdersComponent},
  { path:'orders/:id',component:OrdersDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
