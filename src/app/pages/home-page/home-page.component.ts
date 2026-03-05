import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ImageInfo } from '../portfolio-page/portfolio-page.component';

@Component({
  selector: 'home-page',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  protected picsList: ImageInfo[] = [
    {
      id: 12,
      src: '/Pic12.webp',
      alt: '',
    },
    {
      id: 8,
      src: '/Pic08.webp',
      alt: '',
    },
    {
      id: 3,
      src: '/Pic03.webp',
      alt: '',
    },
    {
      id: 6,
      src: '/Pic06.webp',
      alt: '',
    },
  ];
}
