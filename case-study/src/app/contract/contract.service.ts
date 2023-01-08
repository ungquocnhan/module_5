import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../customer/customer';
import {Contract} from './contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  CONTRACT_URL = 'http://localhost:3000/contracts';

  // CONTRACT_URL = "http://localhost:8080/contracts";

  constructor(private httpClient: HttpClient) {
  }

  getAll(searchDeposit: any = null, searchCustomer: any = null): Observable<Contract[]> {
    // let url = this.CONTRACT_URL + '/?_sort=facility.name&_order=asc';
    let url = this.CONTRACT_URL;
    if (searchDeposit != null && searchCustomer != null) {
      url += '/?deposit_like=' + searchDeposit + '&customer.id_like=' + searchCustomer;
    } else if (searchCustomer != null) {
      url += '/?customer.id_like=' + searchCustomer;
    } else if (searchDeposit != null) {
      url += '/?deposit_like=' + searchDeposit;
    }
    return this.httpClient.get<Contract[]>(url);
  }

  save(contract: Contract) {
    return this.httpClient.post<Contract>(this.CONTRACT_URL, contract);
  }

  deleteById(id: number | undefined): Observable<Contract> {
    return this.httpClient.delete<Contract>(this.CONTRACT_URL + '/' + id);
  }
}

// this.CONTRACT_URL +'/?_limit='+ _limit + '/&_sort=facility.name&_order=asc'

