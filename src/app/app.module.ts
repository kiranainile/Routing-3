import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

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
import { MatDialogModule } from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserFormComponent } from './shared/component/user-dashboard/user-form/user-form.component';
import { UserDetailsComponent } from './shared/component/user-dashboard/user-details/user-details.component';
import { FairCardComponent } from './shared/component/fairs-dashboard/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/component/fairs-dashboard/fair-details/fair-details.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

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
    ProductComponent,
    UserFormComponent,
    UserDetailsComponent,
    FairCardComponent,
    FairDetailsComponent,
    AuthComponent,
    PageNotFoundComponent,


    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
     MatIconModule,
     CommonModule,
     ReactiveFormsModule,
     RouterModule,
     MatSnackBarModule,
     MatDialogModule,
     MatCommonModule,
     MatButtonModule,
     MatCardModule,
     MatChipsModule,
     HttpClientModule 
     
  
     
   
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }