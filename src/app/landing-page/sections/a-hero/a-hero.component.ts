import { Component } from '@angular/core';
import { HeaderComponent } from "../../../core/header/header.component";

@Component({
  selector: 'app-a-hero',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './a-hero.component.html',
  styleUrl: './a-hero.component.scss'
})
export class AHeroComponent {

}
