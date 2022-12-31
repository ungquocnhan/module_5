import { Component, OnInit } from '@angular/core';
import {FacilityType} from '../facility-type';
import {RentType} from '../rent-type';
import {Facility} from '../facility';
import {FacilityService} from '../facility.service';
import {FacilityTypeService} from '../facility-type.service';
import {RentTypeService} from '../rent-type.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  temp: Facility = {};

  facility: Facility = {};

  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService) {
    this.facilityService.getAll().subscribe(data => {
      this.facilities = data;
    }, error => {}, () => {});
  }

  ngOnInit(): void {
  }

}
