import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
/**
 * Service to manage the state of the project modal and the currently selected project.
 */
export class ProjectModalService {
  /**
   * Indicates whether the project modal is open.
   */
  isProjectModalOpen: boolean = false;

  /**
   * Observable to track the state of the project modal.
   */
  isProjectModalOpen$ = new BehaviorSubject<boolean>(this.isProjectModalOpen);

  /**
   * Toggles the state of the project modal and updates the observable.
   * Also sets the current project index.
   * @param index - The index of the project to be shown.
   */
  changeIsProjectModalOpen(index: number) {
    this.isProjectModalOpen = !this.isProjectModalOpen;
    this.isProjectModalOpen$.next(this.isProjectModalOpen);
    this.currentProjectIndex.next(index);
  }

  /**
   * Observable to track the index of the currently selected project.
   */
  currentProjectIndex = new BehaviorSubject<number>(0);

  /**
   * Updates the current project index to the specified index.
   * @param index - The index of the project to be shown.
   */
  showClickedProject(index: number) {
    this.currentProjectIndex.next(index);
  }

  /**
   * Updates the current project index to the specified index.
   * @param index - The index of the next project to be shown.
   */
  showNextProject(index: number) {
    this.currentProjectIndex.next(index);
  }

  /**
   * Updates the current project index to the specified index.
   * @param index - The index of the previous project to be shown.
   */
  showPreviousProject(index: number) {
    this.currentProjectIndex.next(index);
  }
}
