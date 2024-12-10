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

  whoIAmText: string = '';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.whoIAmText =
        this.languageService.currentLanguage == 'en'
          ? 'Who I Am'
          : 'Lerne mich kennen';
    });
  }

  constructor() {
    this.chooseLanguage();
  }
}
