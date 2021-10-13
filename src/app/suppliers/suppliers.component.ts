import { Component, OnInit } from '@angular/core';
import {Suppliers,SuppliersList} from "./suppliers-vm";
import {HttpClient} from "@angular/common/http";
import {myconfig} from "../myconfig";

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  dataLoaded:boolean=false;
  suppliers:Suppliers[]= [];
  supplier:Suppliers=new Suppliers();
  constructor(private http:HttpClient) { }

  async ngOnInit(){
    await this.getData();
  }
  getData() {
    this.http.get<Suppliers[]>(myconfig.webAppUrl + 'API/Supplier').subscribe((result) => {
      this.suppliers = result;
      this.dataLoaded = true;
      console.log(result);
    }, error => console.log(error));
  }
}
