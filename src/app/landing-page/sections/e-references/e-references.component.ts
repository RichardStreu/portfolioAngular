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

  isSingleReferenceTransition: boolean = true;
  isCarouselBoxTransition: boolean = true;

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
  firstRefMid: number = 0;
  firstTranslateX: number = 0;
  lastTranslateX: number = 0;
  carouselBox: any;

  getElementSizes() {
    const carouselContainer = document.querySelector('.carouselContainer');
    const carouselBox = document.querySelector('.carouselBox');
    const singleReference = document.querySelector('.singleReference');

    if (carouselContainer && carouselBox && singleReference) {
      this.carouselContainerWidth = (
        carouselContainer as HTMLElement
      ).offsetWidth;
      this.carouselBoxWidth = (carouselBox as HTMLElement).offsetWidth;
      this.singleReferenceWidth = (singleReference as HTMLElement).offsetWidth;
    }
    console.log(
      this.carouselContainerWidth,
      this.carouselBoxWidth,
      this.singleReferenceWidth
    );
  }

  firstCarouselPositioning() {
    this.firstRefMid = this.singleReferenceWidth * 1.5 + this.gapWidth;
    this.firstTranslateX = this.firstRefMid - this.carouselContainerWidth / 2;
    this.lastTranslateX = this.firstTranslateX;
    this.carouselBox = document.querySelector('.carouselBox');
    if (this.carouselBox) {
      (
        this.carouselBox as HTMLElement
      ).style.transform = `translateX(-${this.firstTranslateX}px)`;
    }
  }

  previousSlide() {
    if (this.carouselBox) {
      if (this.currentDotIndex > 0) {
        this.previousSlideIfBlock();
      } else {
        this.previousSlideElseBlock();
      }
    }
  }

  previousSlideIfBlock() {
    this.currentDotIndex--;
    this.currentReferenceIndex--;
    (this.carouselBox as HTMLElement).style.transform = `translateX(-${
      this.lastTranslateX - this.singleReferenceWidth - this.gapWidth
    }px)`;
    this.lastTranslateX -= this.singleReferenceWidth + this.gapWidth;
  }

  previousSlideElseBlock() {
    this.currentDotIndex = this.references.length - 1;
    this.currentReferenceIndex--;
    (this.carouselBox as HTMLElement).style.transform = `translateX(-${
      this.lastTranslateX - this.singleReferenceWidth - this.gapWidth
    }px)`;
    // this.lastTranslateX -= this.singleReferenceWidth + this.gapWidth;

    // this.currentReferenceIndex = this.carouselArray.length - 3;
  }

  nextSlide() {
    if (this.carouselBox) {
      if (this.currentDotIndex < this.references.length - 1) {
        this.nextSlideIfBlock();
      } else {
        this.nextSlideElseBlock();
      }
    }
  }

  nextSlideIfBlock() {
    this.currentDotIndex++;
    this.currentReferenceIndex++;
    (this.carouselBox as HTMLElement).style.transform = `translateX(-${
      this.lastTranslateX + this.singleReferenceWidth + this.gapWidth
    }px)`;
    this.lastTranslateX += this.singleReferenceWidth + this.gapWidth;
  }

  nextSlideElseBlock() {
    
    this.currentReferenceIndex++;
    (this.carouselBox as HTMLElement).style.transform = `translateX(-${
      this.lastTranslateX + this.singleReferenceWidth + this.gapWidth
    }px)`;
    this.currentDotIndex = 0;
    // this.currentReferenceIndex = 1;
    setTimeout(() => {
      this.isCarouselBoxTransition = false;
      this.isSingleReferenceTransition = false;
      this.currentReferenceIndex = 1;
      (this.carouselBox as HTMLElement).style.transform = `translateX(-${this.firstTranslateX}px)`;
      this.lastTranslateX = this.firstTranslateX;
      setTimeout(() => {
        this.currentReferenceIndex = 1;
        this.isCarouselBoxTransition = true;
        this.isSingleReferenceTransition = true;
      }, 20);
    }, 410);

    // this.lastTranslateX += this.singleReferenceWidth + this.gapWidth;

    // this.currentReferenceIndex = 1;
  }
}
