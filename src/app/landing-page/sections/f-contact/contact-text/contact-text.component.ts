import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-contact-text',
  standalone: true,
  imports: [],
  templateUrl: './contact-text.component.html',
  styleUrl: './contact-text.component.scss'
})
export class ContactTextComponent {
  languageService = inject(LanguageService);

  contactMeText: string = '';
  letsWorkText: string = '';
  solveText: string = '';
  myWorkText: string = '';
  needDevText: string = '';
  letsTalkText: string = '';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.contactMeText =
        this.languageService.currentLanguage == 'en'
          ? 'Contact me'
          : 'Kontaktiere mich';
      this.letsWorkText =
        this.languageService.currentLanguage == 'en'
          ? "Let's work together"
          : 'Lass uns zusammenarbeiten';
      this.solveText =
        this.languageService.currentLanguage == 'en'
          ? 'Got a problem to solve?'
          : 'Ein Problem zu lösen?';
      this.myWorkText =
        this.languageService.currentLanguage == 'en'
          ? 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.'
          : 'Kontaktieren Sie mich über dieses Formular, ich freue mich darauf, von Ihnen zu hören, Ihre Ideen kennenzulernen und zu Ihren Projekten beizutragen.';
      this.needDevText =
        this.languageService.currentLanguage == 'en'
          ? 'Need a Frontend developer?'
          : 'Brauchen Sie einen Entwickler?';
      this.letsTalkText =
        this.languageService.currentLanguage == 'en'
          ? "Let's talk!"
          : 'Lass uns reden!';
    });
  }

  constructor() {
    this.chooseLanguage();
  }


}
