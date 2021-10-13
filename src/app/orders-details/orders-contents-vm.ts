import {Orders} from "../orders/orders-vm";
import {Products} from "../products/products-vm";

export class OrdersContents{
  orderID:number=0;
  productID:number=0;
  unitPrice:number=0;
  quantity:number=0;
  discount:number=0;
  order:Orders=new Orders();
  product:Products=new Products();
}
