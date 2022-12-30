import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  CATEGORY_URL = "http://localhost:3000/categories";

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.CATEGORY_URL);
  }

  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.CATEGORY_URL, category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(this.CATEGORY_URL + '/' + id);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(this.CATEGORY_URL + '/' + id, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(this.CATEGORY_URL + '/' + id);
  }
}
