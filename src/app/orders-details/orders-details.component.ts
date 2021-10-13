import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {myconfig} from "../myconfig";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";
import{Orders} from "../orders/orders-vm";
import {Employee} from "../orders/employee-vm";
import {OrdersContents} from "./orders-contents-vm";


@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit {
  id:string|null=null;
  imagePath:SafeUrl="";
  employeeImagePath:SafeUrl="";
  order:Orders=new Orders();
  reportsTo:Employee=new Employee();
  orderDetails:OrdersContents[]=[];
  showReport:boolean=false;
  showDetails:boolean=false;

  constructor(private http:HttpClient,private _Activatedroute:ActivatedRoute,private _sanitizer:DomSanitizer) { }

  async ngOnInit() {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    await this.GetByID();
  }

  async GetOrderDetailsByID(){
    this.http.get<Orders>(myconfig.webAppUrl+'API/Order/'+this.id).subscribe((result)=> {
    this.order=result;
    let objectURL = 'data:image/jpeg;base64,'+result.employee.base64String;
    this.imagePath = objectURL;});
  }

   async GetByID(){
    this.http.get<OrdersContents[]>(myconfig.webAppUrl+'API/OrderDetails/'+this.id).subscribe((result)=>{
      this.orderDetails=result;
    });
  }

  async GetReportsToByID(){
    this.http.get<Employee>(myconfig.webAppUrl+'API/Employee/'+this.order.employee.reportsToID).subscribe((result2)=> {
      this.reportsTo=result2;
      let objectURL = 'data:image/jpeg;base64,'+result2.base64String;
      this.employeeImagePath = objectURL;});
  }

  GetPictureData(base64String:string){
    let objectUrl='data:image/jpeg;base64'+ base64String;
    return objectUrl;
  }

  async GetReportsToDetails(){
    await this.GetReportsToByID();
    this.showReport=true;
  }

  async GetOrderDetails(){
    await this.GetOrderDetailsByID();
    this.showDetails=true;
  }
}
