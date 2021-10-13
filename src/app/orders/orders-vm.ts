import {Customer} from "./customer-vm";
import {Employee} from "./employee-vm";
import {ShipVia} from "./shipvia-vm";


export class Orders{
  orderID:number=0;
  orderDate:Date=new Date();
  requiredDate:Date=new Date();
  shippedDate:Date=new Date();
  freight:number=0;
  shipName:string="";
  shipAddress:string="";
  shipCity:string="";
  shipRegion:string="";
  shipPostalCode:string="";
  shipCountry:string="";
  customerID:string="";
  employeeID:number=0;
  shipViaID:number=0;
  customer:Customer=new Customer();
  employee:Employee=new Employee();
  shipVia:ShipVia=new ShipVia();
}

export class OrdersList{
  ListOfOrders:Orders[]=[];
}
