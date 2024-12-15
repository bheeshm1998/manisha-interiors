import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  // Company working hours
  workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  // Social media links
  socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' },
    { icon: 'fab fa-instagram', url: '#', label: 'Instagram' },
    { icon: 'fab fa-pinterest', url: '#', label: 'Pinterest' },
    { icon: 'fab fa-linkedin-in', url: '#', label: 'LinkedIn' }
  ];
}