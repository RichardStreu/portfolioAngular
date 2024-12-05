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
          : 'Lerne mich kennen';
      this.aboutMeText =
        this.languageService.currentLanguage == 'en' ? 'About me' : 'Zu mir';
      this.greetingText =
        this.languageService.currentLanguage == 'en'
          ? 'Hi, I’m a german speaking Frontend Developer based in Chemnitz. Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.'
          : 'Hallo, ich bin ein deutschsprachiger Frontend-Entwickler aus Chemnitz. Motiviert von den grenzenlosen Möglichkeiten in der IT, freue ich mich darauf, visuell ansprechende und intuitive Websites und Anwendungen zu gestalten.';
      this.locationText =
        this.languageService.currentLanguage == 'en'
          ? 'Flexible in terms of working environments, I can work effectively both on-site in Munich and remotely.'
          : 'Flexibel in Bezug auf Arbeitsumgebungen, kann ich sowohl vor Ort in Chemnitz als auch remote effektiv arbeiten.';
      this.mindsetText =
        this.languageService.currentLanguage == 'en'
          ? 'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.'
          : 'Ich bin aufgeschlossen und suche ständig nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten ständig zu verbessern.';
      this.professionText =
        this.languageService.currentLanguage == 'en'
          ? "In my profession, programming isn't just about writing code; it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life."
          : 'In meinem Beruf geht es nicht nur darum, Code zu schreiben; es ist eine kreative Form der Problemlösung. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu destillieren. Auf diese Weise helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.';
    });
  }

  constructor() {
    this.chooseLanguage();
  }
}
