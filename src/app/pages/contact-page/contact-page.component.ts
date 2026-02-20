import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { NgxCaptchaModule } from 'ngx-captcha';

@Component({
  selector: 'contact-page',
  imports: [ReactiveFormsModule, ButtonComponent, NgxCaptchaModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent {
  public siteKey = '';

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
  }
}

export type MessageData = {
  email: string | null | undefined;
  title: string | null | undefined;
  message: string | null | undefined;
  'g-recaptcha-response': any;
};
