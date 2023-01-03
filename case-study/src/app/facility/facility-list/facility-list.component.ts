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

  page: number = 1;
  count: number = 0;
  tableSize: number = 6;


  constructor(private facilityService: FacilityService) {
    this.getAllFacility();
  }

  private getAllFacility() {
    this.facilityService.getAll().subscribe(data => {
      this.facilities = data;
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  onTableDataChange(event: number) {
    this.page = event;
    this.getAllFacility();
  }
}
