import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  ngOnInit() {
    this.images = [
      'assets/images/gallery/image (1).jpg',
      'assets/images/gallery/image (2).jpg',
      'assets/images/gallery/image (3).jpg',
      'assets/images/gallery/image (4).jpg',
      'assets/images/gallery/image (5).jpg',
      'assets/images/gallery/image (6).jpg',
    ];
    
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}
