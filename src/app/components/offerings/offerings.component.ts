import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Offering {
  image: string;
  caption: string;
  description: string;
}

@Component({
  selector: 'app-offerings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offerings.component.html',
  styleUrl: './offerings.component.scss'
})
export class OfferingsComponent {
  offerings: Offering[] = [
    {
      image: 'assets/images/offerings/painting.jpg',
      caption: 'Artistic Wall Transformations',
      description: 'Add life to your spaces with our expert painting and wall finishing services"'
    },
    {
      image: 'assets/images/offerings/refurbishment.jpg',
      caption: 'Complete Space Makeovers',
      description: 'Breathe new life into your existing spaces with our comprehensive refurbishment services"'
    },
    {
      image: 'assets/images/offerings/bedroom-design.jpg',
      caption: 'Bedroom Makeover',
      description: 'Transform your bedroom into a peaceful retreat'
    },
    {
      image: 'assets/images/offerings/bathroom-design.jpg',
      caption: 'Bathroom Design',
      description: 'Luxury bathroom designs that combine style and functionality'
    },
    {
      image: 'assets/images/offerings/wardrobe-design.jpg',
      caption: 'Wardrobe solutions',
      description: 'Create productive work spaces in your home'
    },
    {
      image: 'assets/images/offerings/window-design.jpg',
      caption: 'Window Design',
      description: 'Frame your views perfectly with our custom window solutions and treatments'
    },
    {
      image: 'assets/images/offerings/flooring.jpg',
      caption: 'Premium Flooring Solutions',
      description: 'Foundation of beauty with our wide range of flooring options from hardwood to designer tiles'
    }
  ];
}