import { Component, inject, Input, input } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ProjectDataService } from '../../services/project-data.service';
import { CommonModule } from '@angular/common';
import { Project } from '../../shared/interfaces';
import { BehaviorSubject } from 'rxjs';
import { ProjectModalService } from '../../services/project-modal.service';
import { SlideButtonComponent } from '../slide-button/slide-button.component';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, SlideButtonComponent],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  languageService = inject(LanguageService);
  projectData = inject(ProjectDataService);
  projectModalService = inject(ProjectModalService);

  window = window;

  index$: number = 0;

  currentProject: Project = {
    name: 'Join1',
    isCurrentlyShown: false,
    projectImg: 'join.png',
    skillsList: [
      { skillName: 'REST-Api', skillImg: 'Rest-Api.svg' },
      { skillName: 'JavaScript', skillImg: 'JavaScript.svg' },
      { skillName: 'SCSS', skillImg: 'CSS.svg' },
      { skillName: 'HTML', skillImg: 'HTML.svg' },
      { skillName: 'Firebase', skillImg: 'Firebase.svg' },
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
      github: '',
      live: '',
    },
  };

  headlineText: string = '';
  descriptionText: string = '';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.headlineText =
        this.languageService.currentLanguage == 'en'
          ? this.currentProject.headline.en
          : this.currentProject.headline.de;
      this.descriptionText =
        this.languageService.currentLanguage == 'en'
          ? this.currentProject.description.en
          : this.currentProject.description.de;
    });
  }

  constructor() {
  }

  ngOnInit() {
    this.projectModalService.currentProjectIndex$.subscribe((index: number) => {
      if (index >= 0) this.index$ = index;
      this.currentProject = this.projectData.projects[this.index$];
    });
    this.chooseLanguage();
  }

  closeProjectModal(event: any) {
    if (event.target === event.currentTarget) {
      this.projectModalService.changeIsProjectModalOpen(this.index$);
    } else {
      return;
    }
  }

  nextProject() {
    this.projectModalService.showNextProject();
  }

  previousProject() {
    this.projectModalService.showPreviousProject();
  }
}
