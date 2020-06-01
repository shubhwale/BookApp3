import { Component } from '@angular/core';
import { Customer, Address } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  states = ['Maharashtra', 'Madhya Pradesh', 'Karnataka', 'Uttar Pradesh'];
  cities = ['Mumbai', 'Bhopal', 'Banglore', 'Gurgaon'];
  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customer = new Customer();
  }

  addNewEmployee() {
    console.log(this.customer);
    this.customerService
      .registerNewCustomer(this.customer)
      .subscribe((data) => {
        console.log(data);
        if (data !== null) alert('Registration is successful.');
        this.router.navigate(['/login']);
      });
  }
}
