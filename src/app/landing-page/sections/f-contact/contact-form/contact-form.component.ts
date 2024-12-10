import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../services/language.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  languageService = inject(LanguageService);

  labelNameText: string = '';
  placeholderNameText: string = '';
  nameInputValue: string = '';

  labelEmailText: string = '';
  placeholderEmailText: string = '';
  emailInputValue: string = '';

  labelMessageText: string = '';
  placeholderMessageText: string = '';
  messageInputValue: string = '';

  privacyPolicyFirstText: string = '';
  privacyPolicyLinkText: string = '';
  privacyPolicySecondText: string = '';
  privacyPolicyValidationText: string = '';

  submitButtonText: string = '';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.labelNameText =
        this.languageService.currentLanguage == 'en'
          ? "What's your name?"
          : 'Wie ist dein Name?';
      this.placeholderNameText =
        this.languageService.currentLanguage == 'en'
          ? 'Your name goes here'
          : 'Dein Name hier';
      this.labelEmailText =
        this.languageService.currentLanguage == 'en'
          ? "What's your email?"
          : 'Wie ist deine E-Mail?';
      this.placeholderEmailText =
        this.languageService.currentLanguage == 'en'
          ? 'youremail@email.com'
          : 'deinemail@email.com';
      this.labelMessageText =
        this.languageService.currentLanguage == 'en'
          ? 'How can I help you?'
          : 'Wie kann ich dir helfen?';
      this.placeholderMessageText =
        this.languageService.currentLanguage == 'en'
          ? 'Hello Richard, I am interested in...'
          : 'Hallo Richard, ich bin interessiert an...';
      this.privacyPolicyFirstText =
        this.languageService.currentLanguage == 'en'
          ? "I've read the "
          : 'Ich habe die ';
      this.privacyPolicyLinkText =
        this.languageService.currentLanguage == 'en'
          ? 'privacy policy '
          : 'Datenschutzerklärung ';
      this.privacyPolicySecondText =
        this.languageService.currentLanguage == 'en'
          ? 'and agree to the processing of my data as outlined.'
          : 'gelesen und stimme der Verarbeitung meiner Daten zu.';
      this.submitButtonText =
        this.languageService.currentLanguage == 'en'
          ? 'Say Hello ;)'
          : 'Sag Hallo ;)';
    });
  }

  constructor() {
    this.chooseLanguage();
  }

  ngOnInit() {
    this.chooseLanguage();
  }

  onSubmit() {}
}
