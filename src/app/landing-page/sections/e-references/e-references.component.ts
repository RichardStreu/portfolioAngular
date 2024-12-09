import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { ReferenceDataService } from '../../../services/reference-data.service';

@Component({
  selector: 'app-e-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './e-references.component.html',
  styleUrl: './e-references.component.scss',
})
export class EReferencesComponent {
  referenceDataService = inject(ReferenceDataService);
  languageService = inject(LanguageService);

  references: any = [];
  carouselArray: any = [];

  currentDotIndex: number = 0;
  currentReferenceIndex: number = 1;

  headlineText: string = '';

  constructor() {
    this.chooseLanguage();
    this.references = this.referenceDataService.references;
  }

  ngOnInit() {
    this.generateCarouselArray();
  }

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.headlineText =
        this.languageService.currentLanguage == 'en'
          ? 'What my colleagues say about me'
          : 'Was meine Kollegen über mich sagen';
    });
  }

  generateCarouselArray() {
    let carouselArray = [
      this.references[this.references.length - 1],
      ...this.references,
      this.references[0],
      this.references[1],
    ];
    this.carouselArray = carouselArray;
  }

  getElementSizes() {}

  previousSlide() {
    if (this.currentDotIndex > 0) {
      this.currentDotIndex--;
      this.currentReferenceIndex--;
    } else {
      this.currentDotIndex = this.references.length - 1;
      this.currentReferenceIndex = this.carouselArray.length - 3;
    }
  }

  nextSlide() {
    if (this.currentDotIndex < this.references.length - 1) {
      this.currentDotIndex++;
      this.currentReferenceIndex++;
    } else {
      this.currentDotIndex = 0;
      this.currentReferenceIndex = 1;
    }
  }
}
