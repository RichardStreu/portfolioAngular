import { Component, inject, Input, input } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ProjectDataService } from '../../services/project-data.service';
import { CommonModule } from '@angular/common';
import { Project } from '../../shared/interfaces';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {

  languageService = inject(LanguageService);
  projectData:any = inject(ProjectDataService);

  @Input('index') index: number = 0;

  headlineText: string = '';
  descriptionText: string = '';

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.headlineText =
        this.languageService.currentLanguage == 'en'
          ? this.projectData[this.index].headline.en
          : this.projectData[this.index].headline.de;
      this.descriptionText = 
        this.languageService.currentLanguage == 'en'
          ? this.projectData[this.index].description.en
          : this.projectData[this.index].description.de;
    });
  }

  constructor() {
    this.chooseLanguage();
  }
}
