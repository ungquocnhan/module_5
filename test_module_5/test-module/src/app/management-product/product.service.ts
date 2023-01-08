import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';
import {Consignment} from './consignment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // PRODUCT_URL = 'http://localhost:3000/products';
  PRODUCT_URL = 'http://localhost:8080/products';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.PRODUCT_URL);
  }
}
