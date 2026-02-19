import { Component } from '@angular/core';
import { navItems } from '../../util/nav-items';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'desktop-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.css',
})
export class DesktopHeaderComponent {
  protected readonly navItems = navItems;
}
