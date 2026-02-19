import { Component, inject } from '@angular/core';
import { navItems } from '../../util/nav-items';
import { GeneralService } from '../../services/general.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hamburger-menu',
  imports: [RouterLink],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.css',
})
export class HamburgerMenuComponent {
  private readonly generalService = inject(GeneralService);
  protected readonly navItems = navItems;
  protected isOpen = this.generalService.isOpen;

  protected closeMenu(): void {
    this.generalService.closeMenu();
  }
}
