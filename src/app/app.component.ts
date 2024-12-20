import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolioAngular';

  // Boolean to track the visibility of the burger menu.
  isBurgerMenuVisible: boolean = false;

  // Method to set the visibility of the burger menu.
  setBurgerMenuVisibility(boolean: boolean) {
    this.isBurgerMenuVisible = boolean;
  }

  // Boolean to track if the header is hidden.
  isHeaderHidden = false;

  // Variable to store the last scroll position.
  private lastScrollPosition = 0;

  // Reference to the window object.
  window: any = window;

  // Boolean to track if the user is scrolling.
  isScrolling: boolean = false;

  // HostListener to handle window scroll events.
  @HostListener('window:scroll', [])
  showHideHeader() {
    // Check if the scroll position is greater than 100 and the burger menu is not visible.
    if (this.window.scrollY > 100 && !this.isBurgerMenuVisible) {
      // Hide the header if the user is scrolling down, otherwise show it.
      if (this.window.scrollY > this.lastScrollPosition) {
        this.isHeaderHidden = true;
      } else {
        this.isHeaderHidden = false;
      }
      // Update the last scroll position.
      this.lastScrollPosition = this.window.scrollY;
    }
  }
}
