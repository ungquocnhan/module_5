import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './management-product/product/product.component';
import { ConsignmentListComponent } from './management-product/consignment-list/consignment-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { NavbarComponent } from './management-product/navbar/navbar.component';
import { ConsignmentCreateComponent } from './management-product/consignment-create/consignment-create.component';
import { ConsignmentDeleteComponent } from './management-product/consignment-delete/consignment-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ConsignmentEditComponent } from './management-product/consignment-edit/consignment-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ConsignmentListComponent,
    NavbarComponent,
    ConsignmentCreateComponent,
    ConsignmentDeleteComponent,
    ConsignmentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
