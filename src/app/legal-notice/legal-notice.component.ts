import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  languageService = inject(LanguageService);

  // variables to store the text for the contact form
  policyHeadlineText: string = '';

  choosePolicyHeadlineText() {
    this.policyHeadlineText =
      this.languageService.currentLanguage == 'en'
        ? 'Privacy Policy'
        : 'Datenschutzerklärung';
  }

  policyEn = {}

  // function to change the language of the contact form
  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.choosePolicyHeadlineText();
    });
  }

  constructor() {
    this.chooseLanguage();
  }
}
