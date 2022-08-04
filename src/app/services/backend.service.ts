import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
   constructor(
    private http: HttpClient,
   ) {

   }

   getReceiptText() {
    return this.http.get<any>('http://10.2.1.70:8080/OPSWWEBRESTTEST/opsw/erp/apotmob/web/restap/testpos');
   }
}
