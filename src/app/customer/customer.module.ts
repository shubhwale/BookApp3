import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';
import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild(customerRoutes),
    HttpClientModule,
    FormsModule,
  ],
  exports: [],
  providers: [CustomerService],
})
export class CustomerModule {}
