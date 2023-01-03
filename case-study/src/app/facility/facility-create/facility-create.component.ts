import {Component, OnInit} from '@angular/core';
import {FacilityType} from '../facility-type';
import {RentType} from '../rent-type';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FacilityTypeService} from '../facility-type.service';
import {RentTypeService} from '../rent-type.service';
import {FacilityService} from '../facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityTypes: FacilityType[] = [];
  rentTypes: RentType[] = [];

  facilityCreateForm: FormGroup;

  constructor(private form: FormBuilder,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private facilityService: FacilityService,
              private route: Router) {
    this.facilityCreateForm = this.form.group({
      name: (''),
      area: (''),
      cost: (''),
      maxPeople: (''),
      standardRoom: (''),
      descriptionOtherConvenience: (''),
      poolArea: (''),
      numberOfFloor: (''),
      facilityFree: (''),
      facilityType: (''),
      rentType: ('')
    });
    this.facilityTypeService.getAllFacilityType().subscribe(data => {
      this.facilityTypes = data;
    }, error => {
    }, () => {
    });
    this.rentTypeService.getAllRentType().subscribe(data => {
      this.rentTypes = data;
    }, error => {
    }, () => {
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
    let facility = this.facilityCreateForm.value;
    this.facilityService.save(facility).subscribe(() => {
      this.facilityCreateForm.reset();
      this.route.navigateByUrl('/facility/list');
      alert('Create success');
    });
  }

}
