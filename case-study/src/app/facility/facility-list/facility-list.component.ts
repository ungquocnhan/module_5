import { Component, OnInit } from '@angular/core';
import {FacilityType} from '../facility-type';
import {RentType} from '../rent-type';
import {Facility} from '../facility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityType: FacilityType[] = [{id: 1, name: 'Villa'}, {id: 2, name: 'House'}, {id: 3, name: 'Room'}];

  rentType: RentType[] = [{id: 1, name: 'year'}, {id: 2, name: 'month'}, {id: 3, name: 'day'}, {id: 4, name: 'hour'}];

  facility: Facility = {};

  facilities: Facility[] = [
    {
      id: 1,
      name: 'Villa Beach Front',
      area: 250,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 50,
      numberOfFloor: 4,
      facilityType: this.facilityType[0],
      rentType: this.rentType[2]
    },
    {
      id: 2,
      name: 'House Princess 01',
      area: 140,
      cost: 5000000,
      maxPeople: 7,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có thêm bếp nướng',
      numberOfFloor: 3,
      facilityType: this.facilityType[1],
      rentType: this.rentType[1]
    },
    {
      id: 3,
      name: 'Room Twin 01',
      area: 50,
      cost: 1000000,
      maxPeople: 2,
      standardRoom: 'normal',
      descriptionOtherConvenience: 'Có tivi',
      facilityFree: '1 xe máy, 1 xe đạp',
      facilityType: this.facilityType[2],
      rentType: this.rentType[3]
    },
    {
      id: 4,
      name: 'Villa No Beach Front',
      area: 220,
      cost: 9000000,
      maxPeople: 8,
      standardRoom: 'normal',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 30,
      numberOfFloor: 3,
      facilityType: this.facilityType[0],
      rentType: this.rentType[2]
    },
    {
      id: 5,
      name: 'House Princess 02',
      area: 100,
      cost: 4000000,
      maxPeople: 5,
      standardRoom: 'normal',
      descriptionOtherConvenience: 'Có thêm bếp nướng',
      numberOfFloor: 2,
      facilityType: this.facilityType[1],
      rentType: this.rentType[2]
    },
    {
      id: 6,
      name: 'Room Twin 02',
      area: 30,
      cost: 900000,
      maxPeople: 2,
      standardRoom: 'normal',
      descriptionOtherConvenience: 'Có tivi',
      facilityFree: '1 xe máy',
      facilityType: this.facilityType[2],
      rentType: this.rentType[3]
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
