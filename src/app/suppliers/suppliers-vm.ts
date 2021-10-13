export class Suppliers{
  supplierID:number=0;
  companyName:string="";
  contactName:string="";
  contactTitle:string="";
  address:string="";
  city:string="";
  region:string="";
  postalCode:string="";
  country:string="";
  phone:string="";
  fax:string="";
  homePage:string="";
}

export class SuppliersList{
  ListOfSuppliers:Suppliers[]=[];
}
