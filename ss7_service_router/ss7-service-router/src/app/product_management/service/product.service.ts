import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {element} from 'protractor';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  PRODUCT_URL = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) {
    this.getAll();
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.PRODUCT_URL);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.PRODUCT_URL, product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.PRODUCT_URL + '/' + id);
  }

  editProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.PRODUCT_URL + '/' + id, product);
  }

  deleteById(id: number | undefined) {
    return this.httpClient.delete<Product>(this.PRODUCT_URL + '/' + id);
  }
}
