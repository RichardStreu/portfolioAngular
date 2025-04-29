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
          ? 'Across my projects, I’ve worked with a wide range of modern frontend technologies. I like learning new tools and workflows that help me grow as a developer and build better products.'
          : 'In meinen Projekten arbeite ich mit einer Vielzahl moderner Frontend-Technologien. Ich lerne gern neue Tools und Workflows kennen, um als Entwickler stetig zu wachsen.';
  
      this.youNeedText =
        this.languageService.currentLanguage == 'en'
          ? 'You need'
          : 'Du brauchst';
  
      this.anotherSkillText =
        this.languageService.currentLanguage == 'en'
          ? 'another skill?'
          : 'weitere Skills?';
  
      this.feelFreeText =
        this.languageService.currentLanguage == 'en'
          ? 'Feel free to reach out – I’m always open to learning something new and exploring new challenges.'
          : 'Meld dich gern – ich freue mich über neue Herausforderungen und darauf, Neues zu lernen.';
  
      this.buttonText =
        this.languageService.currentLanguage == 'en'
          ? "Let's Talk"
          : 'Jetzt kontaktieren';
  
      this.specialInterestText =
        this.languageService.currentLanguage == 'en'
          ? 'I’m also interested in'
          : 'Ich interessiere mich außerdem für';
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
     {name: "Figma",
      imgPath: "Figma.svg",
      effectClass: "bounce",
      colorClass: "fillColorWhite"
     },
     {name: "TypeScript",
      imgPath: "TypeScript.svg",
      effectClass: "bounce",
      colorClass: "fillColorWhite"
     },
     {name: "Angular",
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
     },
     {name: "TailwindCSS",
      imgPath: "TailwindCSS.svg",
      effectClass: "bounce",
      colorClass: "fillColorWhite"
     }
  ]
}
