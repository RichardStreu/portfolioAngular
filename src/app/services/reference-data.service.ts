import { Injectable } from '@angular/core';
import { Reference } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ReferenceDataService {
  references: Reference[] = [];

  constructor() {
    this.references = [
      {
        name: 'Max Mustermann',
        position: 'CEO',
        referenceText: {
          en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          de: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      },
      {
        name: 'Max Mustermann',
        position: 'CEO',
        referenceText: {
          en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          de: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      },
      {
        name: 'Max Mustermann',
        position: 'CEO',
        referenceText: {
          en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          de: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      },
    ];
  }
}
