import {Supplier} from "./supplier-vm";
import {Category} from "./category-vm";

export class Products{
  productID:number=0;
  productName:string='';
  quantityPerUnit:string='';
  unitPrice:number=0;
  unitsInStock:number=0;
  unitsOnOrder:number=0;
  reorderLevel:number=0;
  discontinued:boolean=false;
  supplierID:number=0;
  categoryID:number=0;
  supplier:Supplier=new Supplier();
  category:Category=new Category();
}

export class ProductsList{
  ListOfProducts:Products[]=[];
}
