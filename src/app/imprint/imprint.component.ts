import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  languageService = inject(LanguageService);

  // variables to store the text for the contact form
  imprintText: string = "";
  mainText: string = "";

  chooseImprintText() {
    this.imprintText =
      this.languageService.currentLanguage == 'en'
        ? "Imprint"
        : 'Impressum';
  }

  chooseMainText() {
    this.mainText =
      this.languageService.currentLanguage == 'en'
        ? `This is the imprint of the website`
        : `Dies ist das Impressum der Webseite`;
  }

  // function to change the language of the contact form
  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.chooseImprintText();
      this.chooseMainText();
    });
  }

  constructor() {
    this.chooseLanguage();
  }

}
