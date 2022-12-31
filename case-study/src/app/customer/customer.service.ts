import {Injectable} from '@angular/core';
import {CustomerType} from './customer-type';
import {Customer} from './customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  CUSTOMER_URL = "http://localhost:3000/customer";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.CUSTOMER_URL);
  }

  saveCustomer(customer: Customer) {
    return this.httpClient.post<Customer>(this.CUSTOMER_URL, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.CUSTOMER_URL + '/' + id);
  }

  editCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.CUSTOMER_URL + '/' + id, customer);
  }

  deleteById(id: number | undefined) {
    return this.httpClient.delete<Customer>(this.CUSTOMER_URL + '/' + id);
  }

}
