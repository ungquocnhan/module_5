import {Component, OnInit} from '@angular/core';
import {FacilityType} from '../facility-type';
import {RentType} from '../rent-type';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FacilityTypeService} from '../facility-type.service';
import {RentTypeService} from '../rent-type.service';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityTypes: FacilityType[] = [];
  rentTypes: RentType[] = [];
  id: number = 0;

  facilityEditForm: FormGroup = this.form.group({
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

  constructor(private form: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private facilityService: FacilityService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = parseInt(<string> data.get('id'));
      this.getFacility(this.id);
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

  private getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(data => {
      this.facilityEditForm.patchValue(data);
    });
  }

  onSubmit(id: number) {
    let facility = this.facilityEditForm?.value;
    this.facilityService.edit(id, facility).subscribe(() => {
      this.route.navigateByUrl('/facility/list');
      alert('Edit success');
    });
  }


  compareFacilityType(item1: RentType, item2: RentType): boolean {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

  compareRentType(item1: FacilityType, item2: FacilityType): boolean {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}



