import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE, EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID } from '../../shared/models/constants';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  businessEmail: String = BUSINESS_EMAIL;
  businessPhone: String = BUSINESS_PHONE;
  businessAddress: String = BUSINESS_ADDRESS
  
  display: any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      from_name: ['', [Validators.required]],
      email: ['', Validators.email],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    if (this.contactForm.valid) {
      emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, this.contactForm.value, EMAIL_JS_PUBLIC_KEY)
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          alert('Message sent successfully!');
          this.contactForm.reset();
        }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
        });
    }
  }
}