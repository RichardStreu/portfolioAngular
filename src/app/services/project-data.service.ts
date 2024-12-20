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
          en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
          de: 'Aufgabenmanager inspiriert vom Kanban System. Erstelle und organisiere Aufgaben mit Drag and Drop Funktionen, weise Benutzer und Kategorien zu.',
        },
        links: {
          github: 'https://github.com/RichardStreu/Developer-Akademie-Join',
          live: 'https://join.richardstreu.dev/',
        },
      },
      {
        name: 'DEVerando',
        isCurrentlyShown: false,
        projectImg: 'deverando.png',
        skillsList: [
          { skillName: 'JavaScript', skillImg: 'JavaScript.svg' },
          { skillName: 'CSS', skillImg: 'CSS.svg' },
          { skillName: 'HTML', skillImg: 'HTML.svg' },
        ],
        headline: {
          en: 'What is this project about?',
          de: 'Worum geht es in diesem Projekt?',
        },
        description: {
          en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
          de: 'Aufgabenmanager inspiriert vom Kanban System. Erstelle und organisiere Aufgaben mit Drag and Drop Funktionen, weise Benutzer und Kategorien zu.',
        },
        links: {
          github: 'https://github.com/RichardStreu/LieferDEVo',
          live: 'https://deverando.richardstreu.dev/',
        },
      },
      {
        name: 'Pokedex',
        isCurrentlyShown: false,
        projectImg: 'pokedex.png',
        skillsList: [
          { skillName: 'REST', skillImg: 'Rest-Api.svg' },
          { skillName: 'JavaScript', skillImg: 'JavaScript.svg' },
          { skillName: 'CSS', skillImg: 'CSS.svg' },
          { skillName: 'HTML', skillImg: 'HTML.svg' },
        ],
        headline: {
          en: 'What is this project about?',
          de: 'Worum geht es in diesem Projekt?',
        },
        description: {
          en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
          de: 'Aufgabenmanager inspiriert vom Kanban System. Erstelle und organisiere Aufgaben mit Drag and Drop Funktionen, weise Benutzer und Kategorien zu.',
        },
        links: {
          github: 'https://github.com/RichardStreu/Developer_Akademie-Pokedex',
          live: 'https://pokedex.richardstreu.dev/',
        },
      },
      {
        name: 'Nordic Impressions',
        isCurrentlyShown: false,
        projectImg: 'photoGallery.png',
        skillsList: [
          { skillName: 'JavaScript', skillImg: 'JavaScript.svg' },
          { skillName: 'CSS', skillImg: 'CSS.svg' },
          { skillName: 'HTML', skillImg: 'HTML.svg' },
        ],
        headline: {
          en: 'What is this project about?',
          de: 'Worum geht es in diesem Projekt?',
        },
        description: {
          en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
          de: 'Aufgabenmanager inspiriert vom Kanban System. Erstelle und organisiere Aufgaben mit Drag and Drop Funktionen, weise Benutzer und Kategorien zu.',
        },
        links: {
          github: 'https://github.com/RichardStreu/Developer_Akademie-Nordic_Impressions',
          live: 'https://nordic-impressions.richardstreu.dev/',
        },
      },
    ];

    this.projectsLength = this.projects.length;
  }

  get getProjectsLength() {
    return this.projectsLength;
  }
}
