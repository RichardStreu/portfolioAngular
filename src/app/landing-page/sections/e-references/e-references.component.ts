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
  currentLanguage: string = '';

  constructor() {
    this.references = this.referenceDataService.references;
  }

  ngOnInit() {
    this.generateCarouselArray();
    this.chooseLanguage();
  }

  ngAfterViewInit(): void {
    this.getElementSizes();
    this.firstCarouselPositioning();
  }
  

  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.currentLanguage = this.languageService.currentLanguage;
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

  carouselContainerWidth: number = 0;
  carouselBoxWidth: number = 0;
  singleReferenceWidth: number = 0;
  gapWidth: number = 48;


  getElementSizes() {
    const carouselContainer = document.querySelector('.carouselContainer');
    const carouselBox = document.querySelector('.carouselBox');
    const singleReference = document.querySelector('.singleReference');

    if (carouselContainer && carouselBox && singleReference) {
      this.carouselContainerWidth = (carouselContainer as HTMLElement).offsetWidth;
      this.carouselBoxWidth = (carouselBox as HTMLElement).offsetWidth;
      this.singleReferenceWidth = (singleReference as HTMLElement).offsetWidth;
    }
    console.log(this.carouselContainerWidth, this.carouselBoxWidth, this.singleReferenceWidth);
  }

  firstCarouselPositioning() {
    let firstRefMid = (this.singleReferenceWidth * 1.5) + this.gapWidth;
    const carouselBox = document.querySelector('.carouselBox');
    if (carouselBox) {
      (carouselBox as HTMLElement).style.transition = 'none';
      (carouselBox as HTMLElement).style.transform = `translateX(-${firstRefMid - (this.carouselContainerWidth / 2)}px)`;
    }
  }

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
