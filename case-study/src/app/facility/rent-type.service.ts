import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FacilityType} from './facility-type';
import {RentType} from './rent-type';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  RENT_TYPE_URL = "http://localhost:3000/rentType";
  constructor(private httpClient: HttpClient) { }

  getAllRentType(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(this.RENT_TYPE_URL);
  }
}
