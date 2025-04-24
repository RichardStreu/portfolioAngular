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
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolioAngular';
  window: any = window;

  setBurgerMenuVisibility(boolean: boolean) {
    this.isBurgerMenuVisible = boolean;
  }

  public isBurgerMenuVisible: boolean = false;

  public isHeaderHidden: boolean = false;

  public isScrolling: boolean = false;

  private lastScrollPosition: number = 0;
  private lastToggleScrollY: number = 0;
  private toggleThreshold: number = 25;

  // HostListener to handle window scroll events.
  @HostListener('window:scroll', [])
  showHideHeader() {

    if (this.window.scrollY > 100 && !this.isBurgerMenuVisible) {
      if (this.window.scrollY > this.lastScrollPosition) {
        this.isHeaderHidden = true;
      } else {
        this.isHeaderHidden = false;
      }

      this.lastScrollPosition = this.window.scrollY;
    }
  }
}
