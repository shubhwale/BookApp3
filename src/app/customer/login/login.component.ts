import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customer = new Customer();
  }

  authenticate() {
    console.log(this.customer);
    this.customerService.authenticate(this.customer).subscribe(
      (data) => {
        if (data != null) {
          alert('Login successful');
          this.router.navigate(['/']);
        }
      },
      (error) => {
        alert('Invalid credentials');
        // we have to clear email and password fields
      }
    );
  }
}
