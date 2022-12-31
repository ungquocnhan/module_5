import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../customer/customer';
import {HttpClient} from '@angular/common/http';
import {Facility} from './facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  FACILITY_URL = "http://localhost:3000/facilities";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.FACILITY_URL);
  }

  save(facility: Facility) {
    return this.httpClient.post<Facility>(this.FACILITY_URL, facility);
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(this.FACILITY_URL + '/' + id);
  }

  edit(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(this.FACILITY_URL + '/' + id, facility);
  }

  deleteById(id: number | undefined) {
    return this.httpClient.delete<Facility>(this.FACILITY_URL + '/' + id);
  }

}
