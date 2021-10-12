import { Component, OnInit } from '@angular/core';
import {Products, ProductsList} from './products-vm';
import {HttpClient} from "@angular/common/http";
import {myconfig} from "../myconfig";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dataLoaded:boolean=false;
  products:Products[]= [];
  product:Products=new Products();
  constructor(private http:HttpClient) { }

  async ngOnInit(){
    await this.getData();
  }
  getData(){
    this.http.get<Products[]>(myconfig.webAppUrl+ 'API/Product').subscribe((result)=>{
      this.products = result;
      this.dataLoaded = true;
      console.log(result);
    },error => console.log(error));
  }
}
