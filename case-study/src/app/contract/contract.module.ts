import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContractRoutingModule} from './contract-routing.module';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {ContractDeleteComponent} from './contract-delete/contract-delete.component';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [
    ContractListComponent,
    ContractCreateComponent,
    ContractDeleteComponent,
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ContractModule {
}
