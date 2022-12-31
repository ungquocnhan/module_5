import {Component, Input, OnInit} from '@angular/core';
import {Facility} from '../facility';
import {FormGroup} from '@angular/forms';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-facility-delete',
  templateUrl: './facility-delete.component.html',
  styleUrls: ['./facility-delete.component.css']
})
export class FacilityDeleteComponent implements OnInit {
  @Input()
  facility: Facility = {};
  deleteForm: FormGroup = new FormGroup({});

  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
  }

  deleteFacility() {
    this.facilityService.deleteById(this.facility.id).subscribe(() => {
      window.location.reload();
      alert("Delete success");
    });
  }
}
