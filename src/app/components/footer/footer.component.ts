import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUSINESS_EMAIL, BUSINESS_PHONE } from '../../shared/models/constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  businessEmail: String = BUSINESS_EMAIL;
  businessPhone: String = BUSINESS_PHONE;

}