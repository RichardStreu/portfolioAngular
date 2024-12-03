import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language: any;
  currentLanguage: string;

  constructor() {
    this.language = new BehaviorSubject<string>('en');
    this.currentLanguage = 'en';
  }

  switchLanguage() {
    if (this.currentLanguage == 'en') {
      this.currentLanguage = 'de';
      this.language.next('de');
    } else {
      this.currentLanguage = 'en';
      this.language.next('en');
    }
  }
}
