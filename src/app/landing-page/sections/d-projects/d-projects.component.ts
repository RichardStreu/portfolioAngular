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



  chooseLanguage() {
    this.languageService.language.subscribe(() => {});
  }

  constructor(private projectData: ProjectDataService) {
    this.chooseLanguage();
  }

}
