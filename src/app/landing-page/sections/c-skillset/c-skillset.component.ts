import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-c-skillset',
  standalone: true,
  imports: [],
  templateUrl: './c-skillset.component.html',
  styleUrl: './c-skillset.component.scss'
})
export class CSkillsetComponent {

  languageService = inject(LanguageService);

  
}
