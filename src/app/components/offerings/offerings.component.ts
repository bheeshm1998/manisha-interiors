import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offerings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offerings.component.html',
  styleUrl: './offerings.component.scss'
})
export class OfferingsComponent implements OnInit {
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
