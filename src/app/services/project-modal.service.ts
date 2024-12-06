import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectModalService {
  constructor() {}

  isProjectModalOpen: boolean = false;

  isProjectModalOpen$ = new BehaviorSubject<boolean>(this.isProjectModalOpen);

  changeIsProjectModalOpen(index: number) {
    this.isProjectModalOpen = !this.isProjectModalOpen;
    this.isProjectModalOpen$.next(this.isProjectModalOpen);
    this.showClickedProject(index);
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
