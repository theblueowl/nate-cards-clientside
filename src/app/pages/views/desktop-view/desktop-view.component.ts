import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopHeaderComponent } from '../../../components/desktop-header/desktop-header.component';

@Component({
  selector: 'desktop-view',
  imports: [RouterOutlet, DesktopHeaderComponent],
  templateUrl: './desktop-view.component.html',
  styleUrl: './desktop-view.component.css',
})
export class DesktopViewComponent {}
