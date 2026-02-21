import { inject, Injectable, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { MessageData } from '../pages/contact-page/contact-page.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly http = inject(HttpClient);
  private readonly formSpreeUrl = environment.formSpreeUrl;

  private readonly _isOpen = signal(false);
  private readonly _isMobileView = signal(false);

  public isOpen = this._isOpen.asReadonly();
  public isMobileView = this._isMobileView.asReadonly();

  toggleMenu(): void {
    this._isOpen.update((value) => !value);
  }

  public openMenu(): void {
    this._isOpen.set(true);
  }

  public closeMenu(): void {
    this._isOpen.set(false);
  }

  public setIsMobileView(isMobileView: boolean): void {
    this._isMobileView.set(isMobileView);
  }

  public getIsMobileViewObservable(): Observable<boolean> {
    return this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .pipe(map((breakpoint) => breakpoint.matches));
  }

  postMessage(message: MessageData): Observable<Object> {
    return this.http.post(`https://formspree.io/f/${this.formSpreeUrl}`, {
      email: message.email,
      title: message.title,
      message: message.message,
      'g-recaptcha-response': message['g-recaptcha-response'],
    });
  }
}
