import { Component, OnInit } from '@angular/core';
import {Orders} from "./orders-vm";
import {HttpClient} from "@angular/common/http";
import{myconfig} from "../myconfig";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  dataLoaded:boolean=false;
  orders:Orders[]= [];
  order:Orders=new Orders();
  constructor(private http:HttpClient) { }

  async ngOnInit(){
    await this.getData();
  }
  getData(){
    this.http.get<Orders[]>(myconfig.webAppUrl+ 'API/Order/').subscribe((result)=>{
    this.orders = result;
    this.dataLoaded = true;
    console.log(result);
    },error => console.log(error));
  }
}
