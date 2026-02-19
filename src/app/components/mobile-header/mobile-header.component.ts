import { Component, inject } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mobile-header',
  imports: [RouterLink],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.css',
})
export class MobileHeaderComponent {
  private readonly generalService = inject(GeneralService);

  protected toggleMenu(): void {
    this.generalService.toggleMenu();
  }
}
