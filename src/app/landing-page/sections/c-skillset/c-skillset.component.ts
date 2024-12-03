import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { SlideButtonComponent } from '../../../components/slide-button/slide-button.component';


@Component({
  selector: 'app-c-skillset',
  standalone: true,
  imports: [SlideButtonComponent],
  templateUrl: './c-skillset.component.html',
  styleUrl: './c-skillset.component.scss'
})
export class CSkillsetComponent {

  languageService = inject(LanguageService);

  technologiesText: string = "";
  skillSetText: string = "";
  skillSetDescriptionText: string = "";
  anotherSkillText: string = "";
  feelFreeText: string = "";
  buttonText: string = "";

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.technologiesText =
        this.languageService.currentLanguage == 'en'
          ? 'Technologies'
          : 'Technologien';
          this.skillSetText = 
          this.languageService.currentLanguage == 'en'
            ? 'Skill Set'
            : 'Fähigkeiten';
          this.skillSetDescriptionText =
          this.languageService.currentLanguage == 'en'
            ? 'My journey has involved working on diverse projects, employing a range of frontend technologies and concepts. I am open to embracing new technologies and methodologies to Continously enhance my skills and stay ahead in the ever-evolving landscape of web development.'
            : 'Meine Reise umfasst die Arbeit an vielfältigen Projekten, bei denen eine Vielzahl von Frontend-Technologien und Konzepten zum Einsatz kamen. Ich bin offen für die Integration neuer Technologien und Methoden, um meine Fähigkeiten kontinuierlich zu verbessern und im ständig wandelnden Landschaft der Webentwicklung auf dem neuesten Stand zu bleiben.';
          this.anotherSkillText = this.languageService.currentLanguage == 'en' ? 'Flexible in terms of working environments, I can work effectively both on-site in Munich and remotely.' : 'Flexibel in Bezug auf Arbeitsumgebungen, kann ich sowohl vor Ort in Chemnitz als auch remote effektiv arbeiten.';
          this.feelFreeText = this.languageService.currentLanguage == 'en' ? 'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.' : 'Ich bin aufgeschlossen und suche ständig nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten ständig zu verbessern.';
          this.buttonText = this.languageService.currentLanguage == 'en' ? "In my profession, programming isn't just about writing code; it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life." : 'In meinem Beruf geht es nicht nur darum, Code zu schreiben; es ist eine kreative Form der Problemlösung. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu destillieren. Auf diese Weise helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.';
    });
  }

}
