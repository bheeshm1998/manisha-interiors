import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  images: string[] = [];
  selectedImage: string | null = null;
  showLightbox = false;

  ngOnInit() {
    this.images = [
      'assets/images/gallery/image_1.jpg',
      'assets/images/gallery/image_2.jpg',
      'assets/images/gallery/image_3.jpg',
      'assets/images/gallery/image_4.jpg',
      'assets/images/gallery/image_5.jpg',
      'assets/images/gallery/image_6.jpg',
      // Add more images as needed
    ];
  }

  onImageClick(image: string) {

  }

  openLightbox(image: string) {
    this.selectedImage = image;
    this.showLightbox = true;
  }

  closeLightbox() {
    this.selectedImage = null;
    this.showLightbox = false;
  }

}