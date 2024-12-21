import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';  // Import ChangeDetectorRef
import { ABOUT_US_CONTENT, API_KEY } from '../../shared/models/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  images: string[] = [];
  currentIndex = 0;
  private autoSlideInterval: any;



  aboutUsContent = ABOUT_US_CONTENT;
  projectsCompleted = 5; 
  teamMembers = 8;

  constructor(private cdRef: ChangeDetectorRef) {}  // Inject ChangeDetectorRef

  ngOnInit() {
    this.images = [
      'assets/images/gallery/image_1.jpg',
      'assets/images/gallery/image_2.jpg',
      'assets/images/gallery/image_3.jpg',
      'assets/images/gallery/image_4.jpg',
      'assets/images/gallery/image_5.jpg',
      'assets/images/gallery/image_6.jpg',
    ];
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.cdRef.detectChanges();  // Manually trigger change detection
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.cdRef.detectChanges();  // Manually trigger change detection
  }

}
