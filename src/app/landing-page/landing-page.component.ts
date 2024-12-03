import { Component } from '@angular/core';
import { AHeroComponent } from './sections/a-hero/a-hero.component';
import { BAboutmeComponent } from './sections/b-aboutme/b-aboutme.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [AHeroComponent, BAboutmeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
