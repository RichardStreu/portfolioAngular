import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  projects: Project[] = [];

  projectsLength: number = 0;

  constructor() {
    this.projects = [
      {
        name: 'Finance (ongoing)',
        isCurrentlyShown: false,
        projectImg: 'finance.png',
        skillsList: [
          { skillName: 'Angular', skillImg: 'Angular.svg' },
          { skillName: 'TypeScript', skillImg: 'TypeScript.svg' },
          { skillName: 'TailwindCSS', skillImg: 'TailwindCSS.svg' },
          { skillName: 'Figma', skillImg: 'Figma.svg' },
        ],
        headline: {
          en: 'What is this project about?',
          de: 'Worum geht es in diesem Projekt?',
        },
        description: {
          en: "FinanceApp is a web-based finance tool built with Angular, TypeScript, and TailwindCSS. It focuses on modular architecture and an intuitive UI for managing transactions, budgets, and insights.",
          de: "FinanceApp ist eine webbasierte Finanzanwendung mit Angular, TypeScript und TailwindCSS. Fokus liegt auf modularer Architektur und intuitiver Oberfläche für Transaktionen, Budgets und Auswertungen.",
        },
        links: {
          github: 'https://github.com/CodeNex/finance-app-frontend',
          live: 'https://financeapp.code-nex.de/',
        },
      },
      {
        name: 'Join',
        isCurrentlyShown: false,
        projectImg: 'join.png',
        skillsList: [
          { skillName: 'Firebase', skillImg: 'Firebase.svg' },
          { skillName: 'JavaScript', skillImg: 'JavaScript.svg' },
          { skillName: 'SCSS', skillImg: 'CSS.svg' },
          { skillName: 'HTML', skillImg: 'HTML.svg' },
        ],
        headline: {
          en: 'What is this project about?',
          de: 'Worum geht es in diesem Projekt?',
        },
        description: {
          en: 'Join is a web-based Kanban board built with HTML5, SCSS, and JavaScript. It enables efficient task organization and workflow management through an intuitive drag-and-drop interface.',
          de: 'Join ist ein webbasiertes Kanban-Board mit HTML5, SCSS und JavaScript. Es ermöglicht effiziente Aufgabenorganisation und Workflow-Management per intuitiver Drag-and-drop-Oberfläche.',
        },
        links: {
          github: 'https://github.com/RichardStreu/Developer-Akademie-Join',
          live: 'https://join.richardstreu.dev/',
        },
      },
      {
        name: 'Sharky',
        isCurrentlyShown: false,
        projectImg: 'sharky.png',
        skillsList: [
          { skillName: 'JavaScript', skillImg: 'JavaScript.svg' },
          { skillName: 'SCSS', skillImg: 'CSS.svg' },
          { skillName: 'HTML', skillImg: 'HTML.svg' },
        ],
        headline: {
          en: 'What is this project about?',
          de: 'Worum geht es in diesem Projekt?',
        },
        description: {
          en: "Sharky is a 2D browser-based jump'n'run game. The focus and challenge lie in object-oriented programming as well as precise timing through the use of a variety of intervals and timeout functions.",
          de: "Sharky ist ein 2D-Browser-Jump'n'Run-Spiel. Der Fokus und die Herausforderung liegen hier auf der objektorientierten Programmierung sowie auf dem präzisen Timing durch den Einsatz einer Vielzahl an Intervallen und Timeout-Funktionen.",
        },
        links: {
          github: 'https://github.com/RichardStreu/Developer-Akademie_Sharkie',
          live: 'https://sharky.richardstreu.dev/',
        },
      },
    ];

    this.projectsLength = this.projects.length;
  }

  get getProjectsLength() {
    return this.projectsLength;
  }
}
