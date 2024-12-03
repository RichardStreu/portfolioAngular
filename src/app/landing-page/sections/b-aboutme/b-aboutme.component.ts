import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-b-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './b-aboutme.component.html',
  styleUrl: './b-aboutme.component.scss'
})
export class BAboutmeComponent {

  languageService = inject(LanguageService);

  whoIAmText: string = 'Who I Am';
  aboutMeText: string = 'About Me';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.whoIAmText =
        this.languageService.currentLanguage == 'en'
          ? 'Who I Am'
          : 'Lerne mich kennen';
          this.aboutMeText = 
          this.languageService.currentLanguage == 'en'
            ? 'About Me'
            : 'Zu mir';
    });
  }

  constructor() {
    this.chooseLanguage();
  }

}
