import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../customer/customer';
import {FacilityType} from './facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  // FACILITY_TYPE_URL = "http://localhost:3000/facilityType";
  FACILITY_TYPE_URL = "http://localhost:8080/facilityTypes";
  constructor(private httpClient: HttpClient) { }

  getAllFacilityType(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>(this.FACILITY_TYPE_URL);
  }

}
