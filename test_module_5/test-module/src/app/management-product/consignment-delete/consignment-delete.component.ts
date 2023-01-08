import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Consignment} from '../consignment';
import {ConsignmentService} from '../consignment.service';

@Component({
  selector: 'app-consignment-delete',
  templateUrl: './consignment-delete.component.html',
  styleUrls: ['./consignment-delete.component.css']
})
export class ConsignmentDeleteComponent implements OnInit {
  @Input()
  consignment: Consignment = {};

  @Output()
  eventDelete = new EventEmitter();
  deleteForm: FormGroup = new FormGroup({});

  constructor(private consignmentService: ConsignmentService) {
  }

  ngOnInit(): void {
  }

  deleteConsignment(): void {
    this.consignmentService.delete(this.consignment.id).subscribe(() => {
      this.eventDelete.emit();
      alert('Xóa thành công');
    });
  }
}
