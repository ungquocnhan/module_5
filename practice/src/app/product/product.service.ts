import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  PRODUCT_URL = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.PRODUCT_URL);
  }


  save(product: Product): Observable<Product> {
   return this.httpClient.post<Product>(this.PRODUCT_URL, product);
  }
}
