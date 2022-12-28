import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FacilityType} from '../interface/facility/facility-type';
import {RentType} from '../interface/facility/rent-type';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  facilityTypes: FacilityType[] = [{id: 1, name: 'Villa'}, {id: 2, name: 'House'}, {id: 3, name: 'Room'}];
  rentTypes: RentType[] = [{id: 1, name: 'year'}, {id: 2, name: 'month'}, {id: 3, name: 'day'}, {id: 4, name: 'hour'}];

  facilityCreateForm: FormGroup;
  constructor(private form: FormBuilder) {
    this.facilityCreateForm = this.form.group({
      name: (''),
      area: (''),
      cost: (''),
      maxPeople: (''),
      standardRoom: (''),
      descriptionOtherConvenience: (''),
      poolArea: (''),
      numberOfFloor: (''),
      facilityType: (''),
      rentType: ('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.facilityCreateForm.value);
  }
}
