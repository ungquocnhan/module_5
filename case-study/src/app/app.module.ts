import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyHomeComponent } from './body-home/body-home.component';
import { ListFacilityComponent } from './list-facility/list-facility.component';
import { EditFacilityComponent } from './edit-facility/edit-facility.component';
import { CreateFacilityComponent } from './create-facility/create-facility.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyHomeComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    CreateFacilityComponent,
    ListCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
