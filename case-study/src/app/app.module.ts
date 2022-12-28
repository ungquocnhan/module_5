import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyHomeComponent } from './body-home/body-home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyHomeComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    ContractListComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
