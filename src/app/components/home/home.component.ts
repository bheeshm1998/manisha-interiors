import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredProjects = [
    {
      title: 'Modern Living Room',
      description: 'Contemporary design with comfort in mind',
      image: 'assets/images/portfolio/living-room.jpg'
    },
    {
      title: 'Luxury Kitchen',
      description: 'Elegant and functional kitchen design',
      image: 'assets/images/portfolio/kitchen.jpg'
    },
    {
      title: 'Peaceful Bedroom',
      description: 'Serene bedroom retreat',
      image: 'assets/images/portfolio/bedroom.jpg'
    }
  ];
}
