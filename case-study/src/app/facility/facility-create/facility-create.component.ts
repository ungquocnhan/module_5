import {Component, OnInit} from '@angular/core';
import {FacilityType} from '../facility-type';
import {RentType} from '../rent-type';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
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

  get name() {
    return this.facilityCreateForm.get('name');
  }

  get area() {
    return this.facilityCreateForm.get('area');
  }

  get cost() {
    return this.facilityCreateForm.get('cost');
  }

  get maxPeople() {
    return this.facilityCreateForm.get('maxPeople');
  }

  get standardRoom() {
    return this.facilityCreateForm.get('standardRoom');
  }

  get descriptionOtherConvenience() {
    return this.facilityCreateForm.get('descriptionOtherConvenience');
  }

  get poolArea() {
    return this.facilityCreateForm.get('poolArea');
  }

  get numberOfFloor() {
    return this.facilityCreateForm.get('numberOfFloor');
  }

  get facilityType() {
    return this.facilityCreateForm.get('facilityType');
  }

  get rentType() {
    return this.facilityCreateForm.get('rentType');
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.facilityCreateForm.value);
  }

}
