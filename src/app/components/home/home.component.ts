import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { ABOUT_US_CONTENT } from '../../shared/models/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[] = [];
  currentIndex = 0;
  private autoSlideSubscription!: Subscription;

  aboutUsContent = ABOUT_US_CONTENT;
  projectsCompleted = 5;
  teamMembers = 8;

  constructor(private ngZone: NgZone) {
    this.images = [
      'assets/images/carousel/image_1.jpg',
      'assets/images/carousel/image_2.jpg',
      'assets/images/carousel/image_3.jpg',
      'assets/images/carousel/image_4.jpg',
      'assets/images/carousel/image_5.jpg',
      'assets/images/carousel/image_6.jpg',
    ];
  }

  ngOnInit(): void {
    // Start the auto-slide within Angular's NgZone
    this.ngZone.runOutsideAngular(() => {
      this.autoSlideSubscription = interval(3000).subscribe(() => {
        this.ngZone.run(() => {
          this.nextSlide();
        });
      });
    });
  }

  nextSlide(): void {
    if (this.images.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }

  previousSlide(): void {
    if (this.images.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }

  ngOnDestroy(): void {
    if (this.autoSlideSubscription) {
      this.autoSlideSubscription.unsubscribe();
    }
  }
}
