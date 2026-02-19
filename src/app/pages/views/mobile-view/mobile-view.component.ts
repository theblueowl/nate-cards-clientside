import { Component } from '@angular/core';
import { MobileHeaderComponent } from '../../../components/mobile-header/mobile-header.component';
import { HamburgerMenuComponent } from '../../../components/hamburger-menu/hamburger-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mobile-view',
  imports: [MobileHeaderComponent, HamburgerMenuComponent, RouterOutlet],
  templateUrl: './mobile-view.component.html',
  styleUrl: './mobile-view.component.css',
})
export class MobileViewComponent {}
