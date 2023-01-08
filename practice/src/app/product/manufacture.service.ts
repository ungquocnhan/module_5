import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Manufacture} from './manufacture';

@Injectable({
  providedIn: 'root'
})
export class ManufactureService {
  MANUFACTURE_URL = 'http://localhost:3000/manufacture';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Manufacture[]>{
    return this.httpClient.get<Manufacture[]>(this.MANUFACTURE_URL);
  }
}
