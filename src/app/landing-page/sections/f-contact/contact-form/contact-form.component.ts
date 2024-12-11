import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../services/language.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  languageService = inject(LanguageService);
  // variables to store the text for the contact form
  labelNameText: string = '';
  placeholderNameText: string = '';
  labelEmailText: string = '';
  placeholderEmailText: string = '';
  labelMessageText: string = '';
  placeholderMessageText: string = '';
  privacyPolicyFirstText: string = '';
  privacyPolicyLinkText: string = '';
  privacyPolicySecondText: string = '';
  submitButtonText: string = '';

  // variables to store the validation warning messages for
  nameDefaultWarning: string = '';
  emailDefaultWarning: string = '';
  messageDefaultWarning: string = '';
  checkboxDefaultWarning: string = '';

  // variables to assign messages to the input fields
  nameInputNgModel: string = '';
  emailInputNgModel: string = '';
  messageInputNgModel: string = '';
  checkboxValidationField: string = '';

  // function to change the language of the contact form
  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.labelNameText =
        this.languageService.currentLanguage == 'en'
          ? "What's your name?"
          : 'Wie ist dein Name?';
      this.placeholderNameText =
        this.languageService.currentLanguage == 'en'
          ? 'Your name goes here'
          : 'Dein Name hier';
      this.labelEmailText =
        this.languageService.currentLanguage == 'en'
          ? "What's your email?"
          : 'Wie ist deine E-Mail?';
      this.placeholderEmailText =
        this.languageService.currentLanguage == 'en'
          ? 'youremail@email.com'
          : 'deinemail@email.com';
      this.labelMessageText =
        this.languageService.currentLanguage == 'en'
          ? 'How can I help you?'
          : 'Wie kann ich dir helfen?';
      this.placeholderMessageText =
        this.languageService.currentLanguage == 'en'
          ? 'Hello Richard, I am interested in...'
          : 'Hallo Richard, ich bin interessiert an...';
      this.privacyPolicyFirstText =
        this.languageService.currentLanguage == 'en'
          ? "I've read the "
          : 'Ich habe die ';
      this.privacyPolicyLinkText =
        this.languageService.currentLanguage == 'en'
          ? 'privacy policy '
          : 'Datenschutzerklärung ';
      this.privacyPolicySecondText =
        this.languageService.currentLanguage == 'en'
          ? 'and agree to the processing of my data as outlined.'
          : 'gelesen und stimme der Verarbeitung meiner Daten zu.';
      this.submitButtonText =
        this.languageService.currentLanguage == 'en'
          ? 'Say Hello ;)'
          : 'Sag Hallo ;)';
      this.nameDefaultWarning =
        this.languageService.currentLanguage == 'en'
          ? 'Please enter your name'
          : 'Bitte geben Sie Ihren Namen ein';
      this.emailDefaultWarning =
        this.languageService.currentLanguage == 'en'
          ? 'Please enter your email'
          : 'Bitte geben Sie Ihre E-Mail ein';
      this.messageDefaultWarning =
        this.languageService.currentLanguage == 'en'
          ? 'Please enter your message'
          : 'Bitte geben Sie Ihre Nachricht ein';
      this.checkboxDefaultWarning =
        this.languageService.currentLanguage == 'en'
          ? 'Please accept the privacy policy.'
          : 'Bitte akzeptieren Sie die Datenschutzrichtlinien.';
    });
  }

  // constructor to call the function to change the language
  constructor() {
    this.chooseLanguage();
  }

  ngOnInit() {
    this.chooseLanguage();
  }

  // function to check if the checkbox is checked
  isCheckboxChecked: boolean = false;
  checkCheckBox() {
    this.isCheckboxChecked = !this.isCheckboxChecked;
    console.log(this.isCheckboxChecked);
  }

  // function to submit the form
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid && contactForm.submitted && this.isCheckboxChecked) {
      let nameInput = contactForm.value.name;
      let emailInput = contactForm.value.email;
      let messageInput = contactForm.value.message;

      console.log(nameInput, emailInput, messageInput);
    }
  }
}
