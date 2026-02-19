import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MobileViewComponent } from './pages/views/mobile-view/mobile-view.component';
import { DesktopViewComponent } from './pages/views/desktop-view/desktop-view.component';

@Component({
  selector: 'app-root',
  imports: [
    MobileViewComponent,
    DesktopViewComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly generalService = inject(GeneralService);
  private readonly destroyRef = inject(DestroyRef);

  public isMobileView = this.generalService.isMobileView;

  ngOnInit(): void {
    this.setIsMobileView();
  }

  private setIsMobileView(): void {
    this.generalService
      .getIsMobileViewObservable()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isMobileView) => {
        if (this.generalService.isMobileView() !== isMobileView) {
          this.generalService.setIsMobileView(isMobileView);
        }
      });
  }
}
