import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyHomeComponent} from './body-home/body-home.component';

const routes: Routes = [
  {
    path: '',
    component: BodyHomeComponent
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
