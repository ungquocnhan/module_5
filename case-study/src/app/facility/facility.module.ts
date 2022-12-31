import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FacilityDeleteComponent } from './facility-delete/facility-delete.component';


@NgModule({
  declarations: [
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    FacilityDeleteComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule { }
