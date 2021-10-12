import {HttpHeaders} from "@angular/common/http";

export class myconfig {
  static webAppUrl: string = 'https://localhost:44366/';
  static httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }
}
