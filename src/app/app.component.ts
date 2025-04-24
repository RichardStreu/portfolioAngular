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

  private lastToggleScrollY: number = 60;

  private toggleThreshold: number = 40;

  // HostListener to handle window scroll events.
  @HostListener('window:scroll', [])
  showHideHeader() {

    if (this.window.scrollY > 100 && !this.isBurgerMenuVisible) {


      if (this.window.scrollY > (this.lastToggleScrollY + this.toggleThreshold)) {
        this.isHeaderHidden = true;
        this.lastToggleScrollY = this.window.scrollY;
      } else if (this.window.scrollY < (this.lastToggleScrollY - this.toggleThreshold)) {
        this.isHeaderHidden = false;
        this.lastToggleScrollY = this.window.scrollY;
      }

    }
  }
}
