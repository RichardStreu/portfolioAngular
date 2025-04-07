import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-contact-text',
  standalone: true,
  imports: [],
  templateUrl: './contact-text.component.html',
  styleUrl: './contact-text.component.scss',
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
          : 'Schreib mir';

      this.letsWorkText =
        this.languageService.currentLanguage == 'en'
          ? "Let's work together"
          : 'Lass uns zusammenarbeiten';

      this.solveText =
        this.languageService.currentLanguage == 'en'
          ? 'Got a problem to solve?'
          : 'Ein Problem, das gelöst werden soll?';

      this.myWorkText =
        this.languageService.currentLanguage == 'en'
          ? 'Use the form to get in touch. I’m curious to hear your ideas and happy to contribute to your project.'
          : 'Nutzen Sie das Formular, um Kontakt aufzunehmen. Ich freue mich auf Ihre Ideen und darauf, Ihr Projekt zu unterstützen.';

      this.needDevText =
        this.languageService.currentLanguage == 'en'
          ? 'Looking for a frontend developer?'
          : 'Sie suchen einen Frontend-Entwickler?';

      this.letsTalkText =
        this.languageService.currentLanguage == 'en'
          ? "Let's talk!"
          : 'Lass uns sprechen!';
    });
  }

  constructor() {
    this.chooseLanguage();
  }
}
