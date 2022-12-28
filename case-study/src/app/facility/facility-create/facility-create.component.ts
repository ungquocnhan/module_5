import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.facilityCreateForm.value);
  }

}
