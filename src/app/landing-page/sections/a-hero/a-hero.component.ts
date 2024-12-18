import { Component, inject, HostListener } from '@angular/core';
import { HeaderComponent } from '../../../core/header/header.component';
import { ArrowLeftComponent } from './arrow-left/arrow-left.component';
import { ArrowRightComponent } from './arrow-right/arrow-right.component';
import { SlideButtonComponent } from '../../../components/slide-button/slide-button.component';
import { SlideBarComponent } from '../../../components/slide-bar/slide-bar.component';
import { LanguageService } from '../../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-a-hero',
  standalone: true,
  imports: [
    HeaderComponent,
    ArrowLeftComponent,
    ArrowRightComponent,
    SlideButtonComponent,
    SlideBarComponent,
    CommonModule,
  ],
  templateUrl: './a-hero.component.html',
  styleUrl: './a-hero.component.scss',
})
/**
 * AHeroComponent is responsible for displaying the hero section of the landing page.
 * It manages the text content for "Check My Work" and "Contact Me" buttons based on the selected language.
 */
export class AHeroComponent {
  /**
   * Service to handle language-related operations.
   */
  languageService = inject(LanguageService);

  /**
   * Text for the buttons.
   * - checkMyWorkText: Defaults to 'Check My Work' in English.
   * - contactMeText: Defaults to 'Contact Me' in English.
   */
  checkMyWorkText: string = 'Check My Work';
  contactMeText: string = 'Contact Me';

  /**
   * Subscribes to language changes and updates the button texts accordingly.
   */
  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.checkMyWorkText =
        this.languageService.currentLanguage == 'en'
          ? 'Check my Work'
          : 'Meine Projekte';
      this.contactMeText =
        this.languageService.currentLanguage == 'en'
          ? 'Contact Me'
          : 'Schreib mir';
    });
  }

  /**
   * Initializes the component and sets the initial language for the button texts.
   */
  constructor() {
    this.chooseLanguage();
  }

  isHeaderHidden = false; // Zustand des Headers
  private lastScrollPosition = 0;
  window: any = window;

  @HostListener('window:scroll', [])
  showHideHeader() {
    if (this.window.scrollY > 100) {
      if (this.window.scrollY > this.lastScrollPosition) {
        this.isHeaderHidden = true;
      } else {
        this.isHeaderHidden = false;
      }
      this.lastScrollPosition = this.window.scrollY;
    }
  }
}
