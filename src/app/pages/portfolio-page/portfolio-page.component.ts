import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'portfolio-page',
  imports: [NgOptimizedImage],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.css',
})
export class PortfolioPageComponent {
  protected picsArray: ImageInfo[] = [
    {
      id: 3,
      src: '/Pic03.webp',
      alt: '',
    },
    {
      id: 4,
      src: '/Pic04.webp',
      alt: '',
    },
    {
      id: 5,
      src: '/Pic05.webp',
      alt: '',
    },
    {
      id: 6,
      src: '/Pic06.webp',
      alt: '',
    },
    {
      id: 7,
      src: '/Pic07.webp',
      alt: '',
    },
    {
      id: 8,
      src: '/Pic08.webp',
      alt: '',
    },
    {
      id: 9,
      src: '/Pic09.webp',
      alt: '',
    },
    {
      id: 10,
      src: '/Pic10.webp',
      alt: '',
    },
    {
      id: 11,
      src: '/Pic11.webp',
      alt: '',
    },
  ];
}

export type ImageInfo = {
  id: number;
  src: string;
  alt: string;
};
