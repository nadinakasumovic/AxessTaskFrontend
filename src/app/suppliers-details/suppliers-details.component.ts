import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Suppliers} from "../suppliers/suppliers-vm";
import {myconfig} from "../myconfig";

@Component({
  selector: 'app-suppliers-details',
  templateUrl: './suppliers-details.component.html',
  styleUrls: ['./suppliers-details.component.css']
})
export class SuppliersDetailsComponent implements OnInit {
  id:string|null=null;
  supplier:Suppliers=new Suppliers();
  constructor(private http:HttpClient,private _Activatedroute:ActivatedRoute) { }

  async ngOnInit() {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    await this.GetByID();
  }

  GetByID(){
    this.http.get<Suppliers>(myconfig.webAppUrl+'API/Supplier/'+this.id).subscribe((result)=> {
      this.supplier=result;
    })
  }
}
