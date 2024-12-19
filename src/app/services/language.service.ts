import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
/**
 * Service to manage and switch between languages.
 */
export class LanguageService {
  /**
   * Observable to track the current language.
   */
  language: any;

  /**
   * The current language code.
   */
  currentLanguage: string;

  lang: boolean = false;

  /**
   * Initializes the LanguageService with the default language set to 'en'.
   */
  constructor() {
    this.language = new BehaviorSubject<string>('en');
    this.currentLanguage = 'en';
  }

  /**
   * Switches the current language between 'en' (English) and 'de' (German).
   * Updates the observable with the new language code.
   */
  switchLanguage() {
    if (this.currentLanguage == 'en') {
      this.currentLanguage = 'de';
      this.language.next('de');
      this.lang = true;
    } else {
      this.currentLanguage = 'en';
      this.language.next('en');
      this.lang = false;
    }
  }
}
