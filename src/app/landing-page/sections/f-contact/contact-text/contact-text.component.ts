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
          : 'Lass uns starten.';

      this.letsWorkText =
        this.languageService.currentLanguage == 'en'
          ? "Let's work together"
          : 'Dein Projekt verdient den nächsten Schritt.';

      this.solveText =
        this.languageService.currentLanguage == 'en'
          ? 'Got a problem to solve?'
          : 'Neue Herausforderungen? Ich liefere Lösungen.';

          this.myWorkText =
          this.languageService.currentLanguage == 'en'
            ? 'Use the form to get in touch. I’m curious to hear your ideas and happy to contribute to your project.'
            : 'Schick mir deine Idee – ich bin ready, dein Projekt nach vorn zu bringen.';
        

      this.needDevText =
        this.languageService.currentLanguage == 'en'
          ? 'Looking for a frontend developer?'
          : 'Frontend-Support für dein Projekt.';

      this.letsTalkText =
        this.languageService.currentLanguage == 'en'
          ? "Let's talk!"
          : 'Lass uns was aufbauen!';
    });
  }

  constructor() {
    this.chooseLanguage();
  }
}
