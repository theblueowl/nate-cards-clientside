import { Component, DestroyRef, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GeneralService } from '../../services/general.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-page',
  imports: [ReactiveFormsModule, ButtonComponent, NgxCaptchaModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent {
  private readonly generalService = inject(GeneralService);
  private readonly destroyRef = inject(DestroyRef);
  public readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  public siteKey = environment.siteKey;

  public commentForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.maxLength(1500)]),
    captcha: new FormControl('', [Validators.required]),
  });

  postComment(): void {
    const formData: MessageData = {
      email: this.commentForm.value.email,
      title: this.commentForm.value.title,
      message: this.commentForm.value.message,
      'g-recaptcha-response': this.commentForm.value.captcha,
    };

    this.generalService
      .postMessage(formData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.snackBar
            .open('❤️ Ви благодарам на довербата!', 'Затвори', { duration: 2000 })
            .afterOpened()
            .subscribe(() => {
              void this.router.navigate(['/']);
            });
        },
      });
  }
}

export type MessageData = {
  email: string | null | undefined;
  title: string | null | undefined;
  message: string | null | undefined;
  'g-recaptcha-response': any;
};
