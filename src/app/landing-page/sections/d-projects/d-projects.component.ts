import { Component, inject } from '@angular/core';
import { ProjectDataService } from '../../../services/project-data.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-d-projects',
  standalone: true,
  imports: [],
  templateUrl: './d-projects.component.html',
  styleUrl: './d-projects.component.scss'
})
export class DProjectsComponent {

  languageService = inject(LanguageService);
  projectData = inject(ProjectDataService);

  featuredText: string = '';
  exploreText: string = '';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.featuredText =
        this.languageService.currentLanguage == 'en' ? 'Featured Projects' : 'Ausgewählte Projekte';
      this.exploreText =
        this.languageService.currentLanguage == 'en' ? 'Explore a selection of my work here - Interact with projects to see my skills in action.' : 'Erkunde hier eine Auswahl meiner Arbeit - Interagiere mit Projekten, um meine Fähigkeiten in Aktion zu sehen.';
    });
  }

  constructor() {
    this.chooseLanguage();
  }

}
