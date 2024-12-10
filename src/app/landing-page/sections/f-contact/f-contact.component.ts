import { Component } from '@angular/core';
import { ContactTextComponent } from './contact-text/contact-text.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-f-contact',
  standalone: true,
  imports: [ContactTextComponent, ContactFormComponent],
  templateUrl: './f-contact.component.html',
  styleUrl: './f-contact.component.scss'
})
export class FContactComponent {

}
