import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HomeDashboardComponent } from './shared/component/home-dashboard/home-dashboard.component';
import { ProductsDashboardComponent } from './shared/component/products-dashboard/products-dashboard.component';
import { ProductFormComponent } from './shared/component/products-dashboard/product-form/product-form.component';

import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FairsDashboardComponent } from './shared/component/fairs-dashboard/fairs-dashboard.component';
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GetConfirmationComponent } from './shared/component/get-confirmation/get-confirmation.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './shared/component/products-dashboard/product/product.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    ProductsDashboardComponent,
    ProductFormComponent,
    NavbarComponent,
    FairsDashboardComponent,
    UserDashboardComponent,
    GetConfirmationComponent,
    ProductComponent

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
     CommonModule,
     ReactiveFormsModule,
     RouterModule,
     MatSnackBarModule,
     MatDialogModule,
     MatCommonModule,
     MatButtonModule,
     
   
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }