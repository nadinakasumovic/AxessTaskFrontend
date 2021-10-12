import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import {ProductsDetailsComponent} from "./products-details/products-details.component";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  {path:'products/:id',component:ProductsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
