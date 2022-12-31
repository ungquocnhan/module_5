import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../customer/customer';
import {Contract} from './contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  CONTRACT_URL = "http://localhost:3000/contracts";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.CONTRACT_URL);
  }

  save(contract: Contract) {
    return this.httpClient.post<Contract>(this.CONTRACT_URL, contract);
  }
}
