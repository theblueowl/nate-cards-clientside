import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-page',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
