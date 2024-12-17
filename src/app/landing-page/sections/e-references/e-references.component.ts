import { CommonModule } from '@angular/common';
import { Component, inject, HostListener } from '@angular/core';
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

  windowWidth: number = 0;

  constructor() {
    this.references = this.referenceDataService.references;
  }

  ngOnInit() {
    this.generateCarouselArray();
    this.chooseLanguage();
  }

  ngAfterViewInit(): void {
    this.onResize();
    this.getElementSizes();
    this.firstCarouselPositioning();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    let width = window.innerWidth;
    console.log(width);

    if (width < 800) {
      this.gapWidth = 24;
      this.getElementSizes();
      this.firstCarouselPositioning();
    } else if (width < 550) {
      this.gapWidth = 16;
      this.getElementSizes();
      this.firstCarouselPositioning();
    }
    else if (width < 450) {
      this.gapWidth = 8;
      this.getElementSizes();
      this.firstCarouselPositioning();
    } else {
      this.gapWidth = 48;
      this.getElementSizes();
      this.firstCarouselPositioning();
    }
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

  isPreviousAble: boolean = true;

  previousSlide() {
    if (this.carouselBox && this.isPreviousAble) {
      this.isPreviousAble = false;
      if (this.currentDotIndex > 0) {
        this.previousSlideIfBlock();
      } else {
        this.previousSlideElseBlock();
      }
    }
    setTimeout(() => {
      this.isPreviousAble = true;
    }, 500);
  }

  previousSlideIfBlock() {
    this.currentDotIndex--;
    this.currentReferenceIndex--;
    (this.carouselBox as HTMLElement).style.transform = `translateX(-${
      this.lastTranslateX - (this.singleReferenceWidth + this.gapWidth)
    }px)`;
    this.lastTranslateX -= this.singleReferenceWidth + this.gapWidth;
  }

  previousSlideElseBlock() {
    this.isCarouselBoxTransition = false;
    this.isSingleReferenceTransition = false;
    this.currentReferenceIndex += this.references.length;
    (this.carouselBox as HTMLElement).style.transform = `translateX(-${
      this.lastTranslateX +
      this.singleReferenceWidth * this.references.length +
      this.gapWidth * this.references.length
    }px)`;
    this.lastTranslateX +=
      this.singleReferenceWidth * this.references.length +
      this.gapWidth * this.references.length;
    setTimeout(() => {
      this.isCarouselBoxTransition = true;
      this.isSingleReferenceTransition = true;
      this.currentReferenceIndex = this.references.length;
      this.currentDotIndex = this.references.length - 1;
      (this.carouselBox as HTMLElement).style.transform = `translateX(-${
        this.lastTranslateX - (this.singleReferenceWidth + this.gapWidth)
      }px)`;
      this.lastTranslateX -= this.singleReferenceWidth + this.gapWidth;
    }, 10);
  }

  isNextAble: boolean = true;

  nextSlide() {
    if (this.carouselBox && this.isNextAble) {
      this.isNextAble = false;
      if (this.currentDotIndex < this.references.length - 1) {
        this.nextSlideIfBlock();
      } else {
        this.nextSlideElseBlock();
      }
    }
    setTimeout(() => {
      this.isNextAble = true;
    }, 500);
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
    setTimeout(() => {
      this.isCarouselBoxTransition = false;
      this.isSingleReferenceTransition = false;
      this.currentReferenceIndex = 1;
      (
        this.carouselBox as HTMLElement
      ).style.transform = `translateX(-${this.firstTranslateX}px)`;
      this.lastTranslateX = this.firstTranslateX;
      setTimeout(() => {
        this.currentReferenceIndex = 1;
        this.isCarouselBoxTransition = true;
        this.isSingleReferenceTransition = true;
      }, 20);
    }, 410);
  }
}
