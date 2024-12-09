import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { ReferenceDataService } from '../../../services/reference-data.service';


@Component({
  selector: 'app-e-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './e-references.component.html',
  styleUrl: './e-references.component.scss'
})
export class EReferencesComponent {

  referenceDataService = inject(ReferenceDataService);
  languageService = inject(LanguageService);

  headlineText: string = '';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.headlineText =
        this.languageService.currentLanguage == 'en'
          ? 'What my colleagues say about me'
          : 'Was meine Kollegen über mich sagen';
    });
  }

  constructor() {
    this.chooseLanguage();
  }

}
