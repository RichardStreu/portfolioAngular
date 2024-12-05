import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectModalService {


  constructor() { 
  }

  currentProjectIndex = new BehaviorSubject<number>(0);

  showClickedProject(index: number) {
    this.currentProjectIndex.next(index);
  }

  showNextProject(index: number) {
    this.currentProjectIndex.next(index);
  }

  showPreviousProject(index: number) {
    this.currentProjectIndex.next(index);
  }
}
