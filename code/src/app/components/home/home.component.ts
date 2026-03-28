import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { ABOUT_US_CONTENT, BUSINESS_TAGLINES } from '../../shared/models/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/carousel/image_1.jpg',
    'assets/images/carousel/image_2.jpg',
    'assets/images/carousel/image_3.jpg',
    'assets/images/carousel/image_4.jpg',
    'assets/images/carousel/image_5.jpg',
    'assets/images/carousel/image_6.jpg',
  ];
  currentIndex = 0;

  taglines = BUSINESS_TAGLINES;
  currentTaglineIndex = 0;
  get currentTagline() { return this.taglines[this.currentTaglineIndex]; }

  aboutUsContent = ABOUT_US_CONTENT;
  projectsCompleted = 5;
  teamMembers = 8;

  private autoSlideSubscription!: Subscription;
  private taglineSubscription!: Subscription;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.autoSlideSubscription = interval(4000).subscribe(() => {
        this.ngZone.run(() => { this.nextSlide(); });
      });
      this.taglineSubscription = interval(5000).subscribe(() => {
        this.ngZone.run(() => {
          this.currentTaglineIndex = (this.currentTaglineIndex + 1) % this.taglines.length;
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
    this.autoSlideSubscription?.unsubscribe();
    this.taglineSubscription?.unsubscribe();
  }
}
