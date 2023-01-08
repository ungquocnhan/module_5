import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsignmentListComponent} from './management-product/consignment-list/consignment-list.component';
import {ConsignmentCreateComponent} from './management-product/consignment-create/consignment-create.component';

const routes: Routes = [
  {
    path: 'consignment/list',
    component: ConsignmentListComponent
  },
  {
    path: 'consignment/create',
    component: ConsignmentCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
