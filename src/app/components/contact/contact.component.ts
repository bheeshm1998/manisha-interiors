import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  
  // Google Maps configuration
  display: any;
  // center: google.maps.LatLngLiteral = {
  //   lat: 12.9716,
  //   lng: 77.5946
  // };
  // zoom = 15;
  
  // Simplified map options
  // mapOptions: google.maps.MapOptions = {
  //   disableDefaultUI: true,
  //   zoomControl: true,
  //   scrollwheel: false,
  // };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}