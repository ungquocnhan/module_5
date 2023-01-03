import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CustomerType} from './customer-type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  // CUSTOMER_TYPE_URL = "http://localhost:3000/customerTypes";
  CUSTOMER_TYPE_URL = "http://localhost:8080/customerTypes";

  constructor(private httpClient: HttpClient) { }

  getAllCustomerType(): Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>(this.CUSTOMER_TYPE_URL);
  }
}
