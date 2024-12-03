import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  languageService = inject(LanguageService);

  lang: boolean = false;

  switchButton() {
    this.lang = !this.lang;
    this.languageService.switchLanguage();
  }

  aboutMeText: string = 'About Me';
  skillsText: string = 'Skills';
  projectsText: string = 'Projects';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.aboutMeText =
        this.languageService.currentLanguage == 'en' ? 'About Me' : 'Über Mich';
      this.skillsText =
        this.languageService.currentLanguage == 'en' ? 'Skills' : 'Fähigkeiten';
      this.projectsText =
        this.languageService.currentLanguage == 'en' ? 'Projects' : 'Projekte';
    });
  }

  constructor() {
    this.chooseLanguage();
  }
}
