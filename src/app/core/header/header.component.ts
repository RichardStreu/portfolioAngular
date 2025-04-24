import {
  Component,
  inject,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Injects the LanguageService to manage language-related operations.
  languageService = inject(LanguageService);

  // A boolean flag indicating the current language state.
  // `true` for the secondary language, `false` for the primary language.
  lang: boolean = false;

  isMobileDevice: boolean = false;

  // Toggles the language state and switches the language using the LanguageService.
  switchButton() {
    this.lang = !this.lang;
    this.languageService.switchLanguage();
  }

  // A boolean flag indicating the visibility state of the burger menu.
  isBurgerMenuVisible: boolean = false;

  // EventEmitter to notify parent components about the burger menu visibility change.
  @Output() updateBurgerVisibility = new EventEmitter();

  // Emit the current visibility state of the burger menu.
  submitBurgerVisibility() {
    this.updateBurgerVisibility.emit(this.isBurgerMenuVisible);
  }

  // Toggle the visibility of the burger menu and adjust the page's overflow and padding.
  showHideBurgerMenu(event: any) {
    // Check if the event target is the same as the event current target.
    if (
      event.target == event.currentTarget ||
      ((event.target.id == 'richardStreuLogoBox' ||
        event.target.id == 'richardStreuLogo' ||
        event.target.id == 'logoPath') &&
        this.isBurgerMenuVisible)
    ) {
      // Toggle the burger menu visibility state.
      this.isBurgerMenuVisible = !this.isBurgerMenuVisible;
      // Emit the updated visibility state.
      this.submitBurgerVisibility();
    }
    // Get the reference to the header content element.
    const headerContentRef = document.getElementById('headerContent');
    // If the burger menu is visible, prevent body scrolling and adjust padding.
    if (this.isBurgerMenuVisible) {
      if (headerContentRef) headerContentRef.style.paddingRight = '8px';
      if (!this.isMobileDevice) this.hideScrollBar();
    } else {
      // If the burger menu is hidden, allow body scrolling and reset padding.
      if (headerContentRef) headerContentRef.style.paddingRight = '0px';
      if (!this.isMobileDevice) this.showScrollBar();
    }
  }

  hideScrollBar() {
    // document.body.style.overflow = 'hidden';
    // document.body.style.paddingRight = '8px';
    document.body.style.position = 'fixed';
    document.body.style.paddingRight = '8px';
  }

  showScrollBar() {
    // document.body.style.overflow = 'auto';
    // document.body.style.paddingRight = '0px';
    document.body.style.position = '';
    document.body.style.paddingRight = '';
  }

  // Text content for the links in the header.
  aboutMeText: string = 'About Me';
  skillsText: string = 'Skills';
  projectsText: string = 'Projects';
  contactText: string = 'Contact';

  // Subscribes to language changes and updates the text content of the header sections
  // based on the current language.
  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.aboutMeText =
        this.languageService.currentLanguage == 'en' ? 'About Me' : 'Über Mich';
      this.skillsText =
        this.languageService.currentLanguage == 'en' ? 'Skills' : 'Fähigkeiten';
      this.projectsText =
        this.languageService.currentLanguage == 'en' ? 'Projects' : 'Projekte';
      this.contactText =
        this.languageService.currentLanguage == 'en' ? 'Contact' : 'Kontakt';
    });
  }

  // Initializes the HeaderComponent and sets up the language subscription.
  constructor() {
    this.chooseLanguage();
    this.lang = this.languageService.lang;
  }

  ngOnInit() {
    this.isMobileDevice = window.innerWidth <= 768;
  }

  scrollToTop() {
    window.scrollTo({ top: 0 });
  }
}
