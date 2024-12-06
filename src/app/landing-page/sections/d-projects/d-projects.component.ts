import { Component, inject } from '@angular/core';
import { ProjectDataService } from '../../../services/project-data.service';
import { LanguageService } from '../../../services/language.service';
import { ProjectBarComponent } from './project-bar/project-bar.component';
import { ThumbnailBoxComponent } from './thumbnail-box/thumbnail-box.component';
import { ProjectModalComponent } from '../../../components/project-modal/project-modal.component';
import { ProjectModalService } from '../../../services/project-modal.service';

@Component({
  selector: 'app-d-projects',
  standalone: true,
  imports: [ProjectBarComponent, ThumbnailBoxComponent, ProjectModalComponent],
  templateUrl: './d-projects.component.html',
  styleUrl: './d-projects.component.scss',
})
export class DProjectsComponent {
  languageService = inject(LanguageService);
  projectDataService = inject(ProjectDataService);
  projectModalService = inject(ProjectModalService);

  projectData: any;

  featuredText: string = '';
  exploreText: string = '';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.featuredText =
        this.languageService.currentLanguage == 'en'
          ? 'Featured Projects'
          : 'Ausgewählte Projekte';
      this.exploreText =
        this.languageService.currentLanguage == 'en'
          ? 'Explore a selection of my work here - Interact with projects to see my skills in action.'
          : 'Erkunde hier eine Auswahl meiner Arbeit - Interagiere mit Projekten, um meine Fähigkeiten in Aktion zu sehen.';
    });
  }

  constructor() {
    this.projectData = this.projectDataService.projects;
    this.chooseLanguage();
  }

  isProjectModalOpen$: boolean = false;

  ngOnInit() {
    this.projectModalService.isProjectModalOpen$.subscribe((boolean) => {
      this.isProjectModalOpen$ = boolean;
    });
  }
}
