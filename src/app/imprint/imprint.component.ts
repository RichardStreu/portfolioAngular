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
  informationText: string = "";
  representedByText: string = "";
  contactText: string = "";
  disclaimerText: string = "";
  contentText: string = "";

  chooseImprintText() {
    this.imprintText =
      this.languageService.currentLanguage == 'en'
        ? "Imprint"
        : 'Impressum';
  }
  chooseInformationText() {
    this.informationText =
      this.languageService.currentLanguage == 'en'
        ? "Information according to § 5 DDG"
        : 'Angaben gemäß § 5 DDG';
  }
  chooseRepresentedByText() {
    this.representedByText =
      this.languageService.currentLanguage == 'en'
        ? "Represented by:"
        : 'Vertreten durch:';
  }
  chooseContactText() {	
    this.contactText =	
      this.languageService.currentLanguage == 'en'	
        ? "Contact"	
        : 'Kontakt';	
  }
  chooseDisclaimerText() {
    this.disclaimerText =
      this.languageService.currentLanguage == 'en'
        ? "Disclaimer"
        : 'Haftungsausschluss';
  }
  chooseContentText() {
    this.contentText =
      this.languageService.currentLanguage == 'en'
        ? "Liability for content"
        : 'Haftung für Inhalte';
  }

  // function to change the language of the contact form
  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.chooseImprintText();
      this.chooseInformationText();
      this.chooseRepresentedByText();
      this.chooseContactText();	
      this.chooseDisclaimerText();
      this.chooseContentText();
    });
  }

  constructor() {
    this.chooseLanguage();
  }

}
