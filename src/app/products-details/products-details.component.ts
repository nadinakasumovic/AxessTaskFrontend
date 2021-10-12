import { Component, OnInit } from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Products} from "../products/products-vm";
import {myconfig} from "../myconfig";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";
import {toBase64String} from "@angular/compiler/src/output/source_map";

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  id:string|null=null;
  imagePath:SafeUrl="";
  product:Products=new Products();
  constructor(private http:HttpClient,private _Activatedroute:ActivatedRoute,private _sanitizer:DomSanitizer) { }

  async ngOnInit() {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    await this.GetByID();
    //this.imagePath = window.URL.createObjectURL(new Blob([this.product.category.picture],{type:'image/png'}))

  }

  GetByID(){
    this.http.get<Products>(myconfig.webAppUrl+'API/Product/'+this.id).subscribe((result)=> {
      this.product=result;
      let objectURL = 'data:image/jpeg;base64,'+result.category.base64String;
      this.imagePath = objectURL;
    })
  }
}
