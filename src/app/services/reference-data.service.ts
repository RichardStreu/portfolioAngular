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
        referenceText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
      },
      {
        name: 'Max Mustermann',
        position: 'CEO',
        referenceText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
      },
      {
        name: 'Max Mustermann',
        position: 'CEO',
        referenceText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
      },
    ];
  }
}
