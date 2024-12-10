import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  languageService = inject(LanguageService);

  whatsNameText: string = '';
  exampleNameText: string = '';
  nameValidationText: string = '';
  whatsEmailText: string = '';
  exampleEmailText: string = '';
  emailValidationText: string = '';
  whatsMessageText: string = '';
  exampleMessageText: string = '';
  messageValidationText: string = '';
  privacyPolicyText: string = '';
  privacyPolicyValidationText: string = '';
  submitButtonText: string = '';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.whatsNameText =
        this.languageService.currentLanguage == 'en'
          ? "What's your name?"
          : 'Wie ist dein Name?';
      this.exampleNameText =
        this.languageService.currentLanguage == 'en'
          ? 'Your name goes here'
          : 'Dein Name hier';
    });
  }

  constructor() {
    this.chooseLanguage();
  }
}
