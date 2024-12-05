import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectModalService {


  constructor() { 
  }

  modalState: boolean = false;

  isProjectModalOpen = new BehaviorSubject<boolean>(this.modalState);

  changeProjectModalState(index: number) { 
    this.modalState = !this.modalState;
    this.isProjectModalOpen.next(this.modalState);
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
