import { Component, Input, Renderer2, ElementRef } from '@angular/core';
import { Project } from '../../../../shared/interfaces';

@Component({
  selector: 'app-project-bar',
  standalone: true,
  imports: [],
  templateUrl: './project-bar.component.html',
  styleUrl: './project-bar.component.scss',
})
export class ProjectBarComponent {
  @Input('index') index: number = 0;

  @Input('project') project: Project = {
    name: 'Join',
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
  };

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  showThumbnail(index: number) {
    let thumbnail = document.getElementById(`thumbnailBoxNr${index}`);
    if (thumbnail) {
      this.renderer.removeClass(thumbnail, 'd_none');
      setTimeout(() => {
      this.renderer.removeClass(thumbnail, 'opacity_0');
      }, 20);
    }
    }

  hideThumbnail(index: number) {

    let thumbnail = document.getElementById(`thumbnailBoxNr${index}`);
    if (thumbnail) {
      this.renderer.addClass(thumbnail, 'opacity_0');
      setTimeout(() => {
        this.renderer.addClass(thumbnail, 'd_none');
      }, 220);
    }
  }
}
