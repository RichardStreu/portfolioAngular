import { Component } from '@angular/core';
import { AHeroComponent } from './sections/a-hero/a-hero.component';
import { BAboutmeComponent } from './sections/b-aboutme/b-aboutme.component';
import { CSkillsetComponent } from './sections/c-skillset/c-skillset.component';
import { DProjectsComponent } from './sections/d-projects/d-projects.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [AHeroComponent, BAboutmeComponent, CSkillsetComponent, DProjectsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  
}
