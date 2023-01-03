import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from './employee';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  EMPLOYEE_URL = "http://localhost:8080/employees";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.EMPLOYEE_URL);
  }

}
