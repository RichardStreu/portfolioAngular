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

  // variables to cache the input NgModels before validation warning
  nameCacheNgModel: string = '';
  emailCacheNgModel: string = '';
  messageCacheNgModel: string = '';

  // function to change the language of the contact form
  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.chooseLabelNameText();
      this.choosePlaceholderNameText();
      this.chooseLabelEmailText();
      this.choosePlaceholderEmailText();
      this.chooseLabelMessageText();
      this.choosePlaceholderMessageText();
      this.choosePrivacyPolicyTexts();
      this.chooseSubmitButtonText();
      this.chooseNameDefaultWarning();
      this.chooseEmailDefaultWarning();
      this.chooseMessageDefaultWarning();
      this.chooseCheckboxDefaultWarning();
    });
  }

  chooseLabelNameText() {
    this.labelNameText =
      this.languageService.currentLanguage == 'en'
        ? "What's your name?"
        : 'Wie ist dein Name?';
  }
  choosePlaceholderNameText() {
    this.placeholderNameText =
      this.languageService.currentLanguage == 'en'
        ? 'Your name goes here'
        : 'Dein Name hier';
  }
  chooseLabelEmailText() {
    this.labelEmailText =
      this.languageService.currentLanguage == 'en'
        ? "What's your email?"
        : 'Wie ist deine E-Mail?';
  }
  choosePlaceholderEmailText() {
    this.placeholderEmailText =
      this.languageService.currentLanguage == 'en'
        ? 'youremail@email.com'
        : 'deinemail@email.com';
  }
  chooseLabelMessageText() {
    this.labelMessageText =
      this.languageService.currentLanguage == 'en'
        ? 'How can I help you?'
        : 'Wie kann ich dir helfen?';
  }
  choosePlaceholderMessageText() {
    this.placeholderMessageText =
      this.languageService.currentLanguage == 'en'
        ? 'Hello Richard, I am interested in...'
        : 'Hallo Richard, ich bin interessiert an...';
  }
  choosePrivacyPolicyTexts() {
    this.privacyPolicyFirstText =
      this.languageService.currentLanguage == 'en'
        ? "I've read the "
        : 'Ich stimme der ';
    this.privacyPolicyLinkText =
      this.languageService.currentLanguage == 'en'
        ? 'privacy policy '
        : 'Datenschutzerklärung ';
    this.privacyPolicySecondText =
      this.languageService.currentLanguage == 'en'
        ? 'and agree to the processing of my data as outlined.'
        : 'zu.';
  }
  chooseSubmitButtonText() {
    this.submitButtonText =
      this.languageService.currentLanguage == 'en'
        ? 'Say Hello ;)'
        : 'Sag Hallo ;)';
  }
  chooseNameDefaultWarning() {
    this.nameDefaultWarning =
      this.languageService.currentLanguage == 'en'
        ? 'Please enter a valid name, e.g., "John Doe".'
        : 'Bitte geben Sie einen gültigen Namen ein, z. B. "Max Mustermann".';
  }
  chooseEmailDefaultWarning() {
    this.emailDefaultWarning =
      this.languageService.currentLanguage == 'en'
        ? 'Please enter a valid email address, e.g., "name@example.com".'
        : 'Bitte geben Sie eine gültige E-Mail-Adresse ein, z. B. "name@example.com".';
  }
  chooseMessageDefaultWarning() {
    this.messageDefaultWarning =
      this.languageService.currentLanguage == 'en'
        ? 'Please enter your message'
        : 'Bitte geben Sie Ihre Nachricht ein';
  }
  chooseCheckboxDefaultWarning() {
    this.checkboxDefaultWarning =
      this.languageService.currentLanguage == 'en'
        ? 'Please accept the privacy policy.'
        : 'Bitte akzeptieren Sie die Datenschutzrichtlinien.';
  }

  // constructor to call the function to change the language
  constructor() {
    this.chooseLanguage();
  }

  ngOnInit() {
    this.chooseLanguage();
  }

  // function to submit the form
  onSubmit(contactForm: NgForm) {
    this.validateAll();
    if (this.areAllInputsValid) {
      if (
        contactForm.valid &&
        contactForm.submitted &&
        this.isCheckboxChecked
      ) {
        let nameInput = contactForm.value.name;
        let emailInput = contactForm.value.email;
        let messageInput = contactForm.value.message;

        console.log(contactForm);
      }
    }
  }

  // name validation
  isNameValid: boolean = false;
  isNameWarning: boolean = false;

  focusNameInput() {
    // console.log('FOCUS name');
  }

  validateName() {
    let name = this.nameInputNgModel;
    if (name.length < 3) {
      this.nameCacheNgModel = this.nameInputNgModel;
      this.isNameWarning = true;
      this.nameInputNgModel = this.nameDefaultWarning;
    }
    // console.log('VALIDTAE name');
  }

  // email validation
  isEmailValid: boolean = false;
  isEmailWarning: boolean = false;

  focusEmailInput() {
    console.log('FOCUS email');
  }

  validateEmail() {
    let email = this.emailInputNgModel;
    console.log('VALIDTAE email');
  }

  // message validation
  isMassageValid: boolean = false;
  isMessageWarning: boolean = false;

  focusMessageInput() {
    console.log('FOCUS message');
  }

  validateMessage() {
    let message = this.messageInputNgModel;
    console.log('VALIDTAE message');
  }

  // function to check if the checkbox is checked
  isCheckboxChecked: boolean = false;

  checkCheckBox() {
    this.isCheckboxChecked = !this.isCheckboxChecked;
    if (this.checkboxValidationField.length > 0) {
      this.checkboxValidationField = '';
    }
  }

  validateCheckbox() {
    if (!this.isCheckboxChecked) {
      this.checkboxValidationField = this.checkboxDefaultWarning;
    } else {
      this.checkboxValidationField = '';
      this.isCheckboxChecked = true;
    }
  }

  // function to validate the input fields after blur
  validateAfterBlur(inputField: String) {
    if (inputField == 'name' && this.nameInputNgModel.length > 0) {
      this.validateName();
    } else if (inputField == 'email' && this.emailInputNgModel.length > 0) {
      this.validateEmail();
    } else if (inputField == 'message' && this.messageInputNgModel.length > 0) {
      this.validateMessage();
    } else {
      return;
    }
  }

  // function to validate all the input fields
  areAllInputsValid: boolean = false;

  validateAll() {
    this.validateName();
    this.validateEmail();
    this.validateMessage();
    this.validateCheckbox();

    if (
      this.isNameValid &&
      this.isEmailValid &&
      this.isMassageValid &&
      this.isCheckboxChecked
    ) {
      this.areAllInputsValid = true;
    } else {
      this.areAllInputsValid = false;
    }
  }

  // function to reset the form
}
