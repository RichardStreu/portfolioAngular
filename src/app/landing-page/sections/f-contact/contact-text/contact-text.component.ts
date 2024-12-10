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
