import { Component, OnInit } from '@angular/core';
import {FacilityType} from '../facility-type';
import {RentType} from '../rent-type';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityTypes: FacilityType[] = [{id: 1, name: 'Villa'}, {id: 2, name: 'House'}, {id: 3, name: 'Room'}];
  rentTypes: RentType[] = [{id: 1, name: 'year'}, {id: 2, name: 'month'}, {id: 3, name: 'day'}, {id: 4, name: 'hour'}];

  facilityEditForm: FormGroup;

  constructor(private form: FormBuilder) {
    this.facilityEditForm = this.form.group({
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

  get name() {
    return this.facilityEditForm.get('name');
  }

  get area() {
    return this.facilityEditForm.get('area');
  }

  get cost() {
    return this.facilityEditForm.get('cost');
  }

  get maxPeople() {
    return this.facilityEditForm.get('maxPeople');
  }

  get standardRoom() {
    return this.facilityEditForm.get('standardRoom');
  }

  get descriptionOtherConvenience() {
    return this.facilityEditForm.get('descriptionOtherConvenience');
  }

  get poolArea() {
    return this.facilityEditForm.get('poolArea');
  }

  get numberOfFloor() {
    return this.facilityEditForm.get('numberOfFloor');
  }

  get facilityType() {
    return this.facilityEditForm.get('facilityType');
  }

  get rentType() {
    return this.facilityEditForm.get('rentType');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.facilityEditForm.value);
  }
}
