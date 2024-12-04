import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { SlideButtonComponent } from '../../../components/slide-button/slide-button.component';
import { SkillItemComponent } from './skill-item/skill-item.component';

@Component({
  selector: 'app-c-skillset',
  standalone: true,
  imports: [SlideButtonComponent, SkillItemComponent],
  templateUrl: './c-skillset.component.html',
  styleUrl: './c-skillset.component.scss',
})
export class CSkillsetComponent {
  languageService = inject(LanguageService);

  technologiesText: string = '';
  skillSetText: string = '';
  skillSetDescriptionText: string = '';
  youNeedText: string = '';
  anotherSkillText: string = '';
  feelFreeText: string = '';
  buttonText: string = '';
  specialInterestText: string = '';

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
      this.youNeedText =
        this.languageService.currentLanguage == 'en' ? 'You need' : 'Du benötigst';
      this.anotherSkillText =
        this.languageService.currentLanguage == 'en' ? 'another skill?' : 'weitere Fähigkeiten?';
      this.feelFreeText =
        this.languageService.currentLanguage == 'en' ? 'Feel free to contact me. I look forward to expanding on my previous knowledge.' : 'Zögern Sie nicht, mich zu kontaktieren. Ich freue mich darauf, mein bisheriges Wissen zu erweitern.';
      this.buttonText =
        this.languageService.currentLanguage == 'en'
          ? "Let's Talk"
          : 'Zum Kontakt';
      this.specialInterestText =
        this.languageService.currentLanguage == 'en'
          ? 'I have a special interest in learning'
          : 'Ich interesseire mich ebenfalls für';
    });
  }

  constructor() {
    this.chooseLanguage();
  }

  skillSet = [
    {name: "HTML",
     imgPath: "HTML.svg",
     effectClass: "bounce",
     colorClass: "fillColorWhite"
    },
    {name: "CSS",
      imgPath: "CSS.svg",
      effectClass: "bounce",
      colorClass: "fillColorWhite"
     },
     {name: "JavaScript",
      imgPath: "JavaScript.svg",
      effectClass: "bounce",
      colorClass: "fillColorWhite"
     },
     {name: "Material Design",
      imgPath: "Material-Design.svg",
      effectClass: "bounce",
      colorClass: "fillColorWhite"
     },
     {name: "TypeScript",
      imgPath: "TypeScript.svg",
      effectClass: "bounce",
      colorClass: "fillColorWhite"
     },
     {name: "Anuglar",
      imgPath: "Angular.svg",
      effectClass: "bounce",
      colorClass: "fillColorWhite"
     },
     {name: "Firebase",
      imgPath: "Firebase.svg",
      effectClass: "bounce",
      colorClass: "fillColorWhite"
     },
     {name: "GIT",
      imgPath: "Git.svg",
      effectClass: "bounce",
      colorClass: "fillColorWhite"
     },
     {name: "REST-Api",
      imgPath: "Rest-Api.svg",
      effectClass: "bounce",
      colorClass: "fillColorWhite"
     },
     {name: "Scrum",
      imgPath: "Scrum.svg",
      effectClass: "bounce",
      colorClass: "fillColorWhite"
     }
  ]
}
