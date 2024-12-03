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
  greetingText: string = 'Hi, I’m a german speaking Frontend Developer based in Chemnitz. Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.whoIAmText =
        this.languageService.currentLanguage == 'en'
          ? 'Who I Am'
          : 'Lerne mich kennen';
          this.aboutMeText = 
          this.languageService.currentLanguage == 'en'
            ? 'About me'
            : 'Zu mir';
          this.greetingText =
          this.languageService.currentLanguage == 'en'
            ? 'Hi, I’m a german speaking Frontend Developer based in Chemnitz. Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.'
            : 'Hallo, ich bin ein deutschsprachiger Frontend-Entwickler aus Chemnitz. Motiviert von den grenzenlosen Möglichkeiten in der IT, freue ich mich darauf, visuell ansprechende und intuitive Websites und Anwendungen zu gestalten.';
    });
  }

  constructor() {
    this.chooseLanguage();
  }

}
