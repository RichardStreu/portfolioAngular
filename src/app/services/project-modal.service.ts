import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectDataService } from './project-data.service';

@Injectable({
  providedIn: 'root',
})
/**
 * Service to manage the state of the project modal and the currently selected project.
 */
export class ProjectModalService {
  projectDataService = inject(ProjectDataService);

  projectsLength: number = this.projectDataService.getProjectsLength;

  /**
   * Indicates whether the project modal is open.
   */
  isProjectModalOpen: boolean = false;

  /**
   * Observable to track the state of the project modal.
   */
  isProjectModalOpen$ = new BehaviorSubject<boolean>(this.isProjectModalOpen);

  calcScrollbarWidth() {
    let viewportWidth = window.innerWidth;
    let documentWidth = document.documentElement.clientWidth;
    return viewportWidth - documentWidth;
  }

  /**
   * Controls scrolling on the main document.
   */
  controlScrolling(): void {
    if (this.isProjectModalOpen) {
      document.body.style.paddingRight = this.calcScrollbarWidth() + 'px';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = 'auto';
    }
  }

  /**
   * Toggles the state of the project modal and updates the observable.
   * Also sets the current project index.
   * @param index - The index of the project to be shown.
   */
  changeIsProjectModalOpen(index: number) {
    this.isProjectModalOpen = !this.isProjectModalOpen;
    this.isProjectModalOpen$.next(this.isProjectModalOpen);
    this.controlScrolling();
    this.showClickedProject(index);
  }

  /**
   * The index of the currently selected project.
   * This is used to keep track of which project is currently being viewed or edited.
   * @type {number}
   */
  currentProjectIndex: number = 0;

  /**
   * Observable to track the index of the currently selected project.
   */
  currentProjectIndex$ = new BehaviorSubject<number>(this.currentProjectIndex);

  /**
   * Updates the current project index to the specified index.
   * @param index - The index of the project to be shown.
   */
  showClickedProject(index: number) {
    if (
      index >= 0 &&
      index < this.projectsLength &&
      index !== this.currentProjectIndex
    ) {
      this.currentProjectIndex = index;
      this.currentProjectIndex$.next(this.currentProjectIndex);
    }
  }

  /**
   * Updates the current project index to the specified index.
   * @param index - The index of the next project to be shown.
   */
  showNextProject() {
    if (
      this.currentProjectIndex >= 0 &&
      this.currentProjectIndex < this.projectsLength - 2
    ) {
      this.currentProjectIndex++;
    }
    if (this.currentProjectIndex === this.projectsLength - 1) {
      this.currentProjectIndex = 0;
    }
    this.currentProjectIndex$.next(this.currentProjectIndex);
  }

  /**
   * Updates the current project index to the specified index.
   * @param index - The index of the previous project to be shown.
   */
  showPreviousProject() {
    if (
      this.currentProjectIndex > 0 &&
      this.currentProjectIndex < this.projectsLength - 1
    ) {
      this.currentProjectIndex--;
    }
    if (this.currentProjectIndex === 0) {
      this.currentProjectIndex = this.projectsLength - 1;
    }
    this.currentProjectIndex$.next(this.currentProjectIndex);
  }
}
