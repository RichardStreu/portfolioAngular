import { Component, inject, Input, input } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ProjectDataService } from '../../services/project-data.service';
import { CommonModule } from '@angular/common';
import { Project } from '../../shared/interfaces';
import { BehaviorSubject } from 'rxjs';
import { ProjectModalService } from '../../services/project-modal.service';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  languageService = inject(LanguageService);
  projectData: any = inject(ProjectDataService);
  projectModalService = inject(ProjectModalService);

  // @Input('index') index: number = 0;

  index: number = 0;

  headlineText: string = '';
  descriptionText: string = '';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.headlineText =
        this.languageService.currentLanguage == 'en'
          ? this.projectData.projects[this.index].headline.en
          : this.projectData.projects[this.index].headline.de;
      this.descriptionText =
        this.languageService.currentLanguage == 'en'
          ? this.projectData.projects[this.index].description.en
          : this.projectData.projects[this.index].description.de;
    });
  }

  constructor() {
    this.chooseLanguage();
    this.projectModalService.currentProjectIndex.subscribe((index: number) => {
      if (index) this.index = index;
    });
  }
}
