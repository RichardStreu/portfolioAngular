import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {

  languageService = inject(LanguageService);



  chooseLanguage() {
    this.languageService.language.subscribe(() => {});
  }

  constructor() {
    this.chooseLanguage();
  }
}
