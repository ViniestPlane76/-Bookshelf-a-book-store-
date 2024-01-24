import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
interface Payments {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-address',
  standalone: true,
  imports:[CommonModule, RouterModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  fb=inject(FormBuilder);
  form=this.fb.group({
    lastName:[null,Validators.required],
    firstName:[null,Validators.required],
    mailEmail:[null,Validators.required],
    streetStreet:[null,Validators.required],
    streetNumber:[null,Validators.required],
    streetZip:[null,Validators.required],
    streetCity:[null,Validators.required],
    phoneNumber:[null,Validators.required],
    paymentPayment:[null,Validators.required],
  })
  payments: Payments[] = [
    {value: 'banktransfer-0', viewValue: 'Bank Transfer'},
    {value: 'blik-1', viewValue: 'Blik'},
    {value: 'paypal-2', viewValue: 'PayPal'},
    {value: 'cash-3', viewValue: 'Cash on delivery'},
  ];
  router=inject(Router)
  handleSubmit(){
    this.router.navigateByUrl("/thankyou")
  }
}
