import { Component } from '@angular/core';
import { HeaderComponent } from "../../../core/header/header.component";
import { ArrowLeftComponent } from './arrow-left/arrow-left.component';
import { ArrowRightComponent } from './arrow-right/arrow-right.component';

@Component({
  selector: 'app-a-hero',
  standalone: true,
  imports: [HeaderComponent, ArrowLeftComponent, ArrowRightComponent],
  templateUrl: './a-hero.component.html',
  styleUrl: './a-hero.component.scss'
})
export class AHeroComponent {

}
