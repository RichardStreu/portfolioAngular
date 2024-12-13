import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  /**
   * Injects the LanguageService to manage language-related operations.
   */
  languageService = inject(LanguageService);

  /**
   * A boolean flag indicating the current language state.
   * `true` for the secondary language, `false` for the primary language.
   */
  lang: boolean = false;

  /**
   * Toggles the language state and switches the language using the LanguageService.
   */
  switchButton() {
    this.lang = !this.lang;
    this.languageService.switchLanguage();
  }

  isBurgerMenuVisible: boolean = false;

  showHideBurgerMenu() {
    this.isBurgerMenuVisible = !this.isBurgerMenuVisible;
  }

  /**
   * Text content for the links in the header.
   */
  aboutMeText: string = 'About Me';

  skillsText: string = 'Skills';

  projectsText: string = 'Projects';

  /**
   * Subscribes to language changes and updates the text content of the header sections
   * based on the current language.
   */
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

  /**
   * Initializes the HeaderComponent and sets up the language subscription.
   */
  constructor() {
    this.chooseLanguage();
    this.lang = this.languageService.lang;
  }
}
