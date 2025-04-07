import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-b-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './b-aboutme.component.html',
  styleUrl: './b-aboutme.component.scss',
})
export class BAboutmeComponent {
  languageService = inject(LanguageService);

  whoIAmText: string = '';
  aboutMeText: string = '';
  greetingText: string = '';
  locationText: string = '';
  mindsetText: string = '';
  professionText: string = '';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.whoIAmText =
        this.languageService.currentLanguage == 'en'
          ? 'Who I Am'
          : 'Über mich';
      this.aboutMeText =
        this.languageService.currentLanguage == 'en' ? 'About me' : 'Zu mir';
      this.greetingText =
        this.languageService.currentLanguage == 'en'
          ? 'Hey, I’m a Frontend Developer based in Germany, with a background in operations and automation. I focus on building reliable and user-friendly interfaces using modern technologies – always with clean structure, consistent design, and attention to detail.'
          : 'Hey, ich bin Frontend-Entwickler aus Deutschland mit Erfahrung in operativen Abläufen und Automatisierung. Ich entwickle durchdachte, nutzerfreundliche Anwendungen auf Basis moderner Technologien – mit klarer Struktur, einheitlichem Design und Blick fürs Detail.';
      this.locationText =
        this.languageService.currentLanguage == 'en'
          ? 'Based by Chemnitz, I work flexibly – both remote and on-site.'
          : 'Ich arbeite flexibel aus Penig – sowohl remote als auch vor Ort.';
      this.mindsetText =
        this.languageService.currentLanguage == 'en'
          ? 'Driven by curiosity, I constantly seek to improve processes, code, and user experiences.'
          : 'Neugierig und lösungsorientiert optimiere ich laufend Prozesse, Code und Nutzererfahrungen.';
      this.professionText =
        this.languageService.currentLanguage == 'en'
          ? "For me, development is more than code – it's problem-solving with purpose. I turn complexity into clarity and help translate ideas into working products."
          : 'Für mich ist Entwicklung mehr als Code – es ist zielgerichtete Problemlösung. Ich mache Komplexes verständlich und setze Ideen in funktionierende Produkte um.';
    });
  }

  constructor() {
    this.chooseLanguage();
  }
}
