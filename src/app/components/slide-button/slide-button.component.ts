import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-button',
  standalone: true,
  imports: [],
  templateUrl: './slide-button.component.html',
  styleUrl: './slide-button.component.scss'
})
export class SlideButtonComponent {

  @Input("text") text: string = "";
  @Input("path") path?: string = "";
  @Input("target") target?:boolean = false;

}
