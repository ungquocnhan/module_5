import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contract} from '../contract';
import {FormGroup} from '@angular/forms';
import {ContractService} from '../contract.service';
import {NotificationService} from '../../notification.service';

@Component({
  selector: 'app-contract-delete',
  templateUrl: './contract-delete.component.html',
  styleUrls: ['./contract-delete.component.css']
})
export class ContractDeleteComponent implements OnInit {
  @Input()
  contract: Contract = {};
  @Output()
  eventDelete = new EventEmitter();
  deleteForm: FormGroup = new FormGroup({});
  constructor(private contractService: ContractService,
              private nofiticationService: NotificationService) { }

  ngOnInit(): void {
  }

  deleteContract() {
    this.contractService.deleteById(this.contract.id).subscribe(() => {
      this.eventDelete.emit()
      this.showToastrSuccess();
    }, error => {
      this.showToastrError();
    });
  }

  showToastrSuccess() {
    this.nofiticationService.showSuccess('Delete successfull');
  }

  showToastrError() {
    this.nofiticationService.showSuccess('Delete error');
  }
}
