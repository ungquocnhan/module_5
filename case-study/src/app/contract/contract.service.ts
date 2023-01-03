import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../customer/customer';
import {Contract} from './contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  // CONTRACT_URL = "http://localhost:3000/contracts";
  CONTRACT_URL = "http://localhost:8080/contracts";

  constructor(private httpClient: HttpClient) { }

  getAll(searchDeposit: any = null, searchCustomer: any = null): Observable<Contract[]> {
    // let url = this.CONTRACT_URL + '/?_sort=facility.name&_order=asc';
    let url = this.CONTRACT_URL;
    if(searchDeposit != null){
      url += '/?deposit_like=' + searchDeposit;
      // url += '&q=' + searchKey;
    }else if(searchCustomer != null){
      url += '/?customer.name_like=' + searchCustomer;
    }
    console.log(url);
    return this.httpClient.get<Contract[]>(url);
  }

  save(contract: Contract) {
    return this.httpClient.post<Contract>(this.CONTRACT_URL, contract);
  }
}
// this.CONTRACT_URL +'/?_limit='+ _limit + '/&_sort=facility.name&_order=asc'

