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
  submitButtonDefaultText: string = '';
  submitButtonSuccessText: string = '';

  // variables to store the validation warning messages for
  nameDefaultWarning: string = '';
  emailDefaultWarning: string = '';
  messageDefaultWarning: string = '';
  messageCharacterWarning: string = '';
  checkboxDefaultWarning: string = '';

  // variables to assign text to input fields & submit button
  nameInputNgModel: string = '';
  emailInputNgModel: string = '';
  messageInputNgModel: string = '';
  checkboxValidationField: string = '';
  submitButtonText: string = '';

  // variables to cache the input NgModels before validation warning
  nameCacheNgModel: string = '';
  emailCacheNgModel: string = '';
  messageCacheNgModel: string = '';

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
  chooseSubmitButtonDefaultText() {
    this.submitButtonDefaultText =
      this.languageService.currentLanguage == 'en'
        ? 'Say Hello ;)'
        : 'Sag Hallo ;)';
  }
  chooseSubmitButtonSuccessText() {
    this.submitButtonSuccessText =
      this.languageService.currentLanguage == 'en'
        ? "Message sent! I'll be in touch soon."
        : 'Nachricht gesendet! Ich melde mich bald.';
  }
  chooseNameDefaultWarning() {
    this.nameDefaultWarning =
      this.languageService.currentLanguage == 'en'
        ? 'Please enter a valid name, e.g., "John-Mia Doe".'
        : 'Bitte schreib deinen Namen so, z. B. "Max-Mai Muster".';
  }
  chooseEmailDefaultWarning() {
    this.emailDefaultWarning =
      this.languageService.currentLanguage == 'en'
        ? 'Please enter a valid email address, e.g., "name@example.com".'
        : 'Bitte gib eine gültige E-Mail an, z. B. "maxi-muster@mail.de".';
  }
  chooseMessageDefaultWarning() {
    this.messageDefaultWarning =
      this.languageService.currentLanguage == 'en'
        ? 'Your message must be at least 2 words long.'
        : 'Deine Nachricht muss mindestens zwei Wörter enthalten.';
  }
  chooseMessageCharacterWarning() {
    this.messageCharacterWarning =
      this.languageService.currentLanguage == 'en'
        ? 'Please do not use the following special characters: < > " \' `.'
        : 'Bitte verwende nicht die folgenden Sonderzeichen: < > " \' `.';
  }
  chooseCheckboxDefaultWarning() {
    this.checkboxDefaultWarning =
      this.languageService.currentLanguage == 'en'
        ? 'Please accept the privacy policy.'
        : 'Bitte lies und akzeptiere die Datenschutzrichtlinien.';
  }

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
      this.chooseSubmitButtonDefaultText();
      this.chooseSubmitButtonSuccessText();
      this.chooseNameDefaultWarning();
      this.chooseEmailDefaultWarning();
      this.chooseMessageDefaultWarning();
      this.chooseMessageCharacterWarning();
      this.chooseCheckboxDefaultWarning();
    });
  }

  // constructor to call the function to change the language
  constructor() {
    this.chooseLanguage();
    this.submitButtonText = this.submitButtonDefaultText;
  }

  ngOnInit() {
    this.chooseLanguage();
  }

  // function to submit the form
  onSubmit() {
    this.validateAll();
    if (this.areAllInputsValid) {
      setTimeout(() => {
        this.submitButtonText = this.submitButtonSuccessText;

        setTimeout(() => {
          this.submitButtonText = this.submitButtonDefaultText;
          this.resetAllInputs();
        }, 2500);
      }, 200);
    }
  }

  // name validation
  isNameValid: boolean = false;
  isNameWarning: boolean = false;

  focusNameInput() {
    if (this.isNameWarning) {
      this.nameInputNgModel = this.nameCacheNgModel;
      this.nameCacheNgModel = '';
      this.isNameWarning = false;
    }
  }

  validateName() {
    const charactersRegex = /[<>"'`]/;
    const nameRegex = /^[A-Za-z]+(-[A-Za-z]+)? [A-Za-z]+(-[A-Za-z]+)?$/;
    let name = this.nameInputNgModel;
    let validName = nameRegex.test(name);

    if (
      this.nameInputNgModel == this.nameDefaultWarning ||
      this.nameInputNgModel == this.messageCharacterWarning
    ) {
      return;
    }

    if (charactersRegex.test(name)) {
      this.isNameWarning = true;
      this.isNameValid = false;
      this.areAllInputsValid = false;
      this.nameCacheNgModel = this.nameInputNgModel;
      this.nameInputNgModel = this.messageCharacterWarning;
    } else if (name.length < 3 || !validName) {
      this.isNameWarning = true;
      this.isNameValid = false;
      this.areAllInputsValid = false;
      this.nameCacheNgModel = this.nameInputNgModel;
      this.nameInputNgModel = this.nameDefaultWarning;
    } else {
      this.isNameValid = true;
      this.nameCacheNgModel = '';
      this.isNameWarning = false;
      if (
        this.isNameValid &&
        this.isEmailValid &&
        this.isMessageValid &&
        this.isCheckboxChecked
      ) {
        this.areAllInputsValid = true;
      }
    }
  }

  // email validation
  isEmailValid: boolean = false;
  isEmailWarning: boolean = false;

  focusEmailInput() {
    if (this.isEmailWarning) {
      this.emailInputNgModel = this.emailCacheNgModel;
      this.emailCacheNgModel = '';
      this.isEmailWarning = false;
    }
  }

  validateEmail() {
    const charactersRegex = /[<>"'`]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    let email = this.emailInputNgModel;
    let validEmail = emailRegex.test(email);

    if (
      this.emailInputNgModel == this.emailDefaultWarning ||
      this.emailInputNgModel == this.messageCharacterWarning
    ) {
      return;
    }

    if (charactersRegex.test(email)) {
      this.isEmailWarning = true;
      this.isEmailValid = false;
      this.areAllInputsValid = false;
      this.emailCacheNgModel = this.emailInputNgModel;
      this.emailInputNgModel = this.messageCharacterWarning;
    } else if (!validEmail) {
      this.isEmailWarning = true;
      this.isEmailValid = false;
      this.areAllInputsValid = false;
      this.emailCacheNgModel = this.emailInputNgModel;
      this.emailInputNgModel = this.emailDefaultWarning;
    } else {
      this.isEmailValid = true;
      this.emailCacheNgModel = '';
      this.isEmailWarning = false;
      if (
        this.isNameValid &&
        this.isEmailValid &&
        this.isMessageValid &&
        this.isCheckboxChecked
      ) {
        this.areAllInputsValid = true;
      }
    }
  }

  // message validation
  isMessageValid: boolean = false;
  isMessageWarning: boolean = false;

  focusMessageInput() {
    if (this.isMessageWarning) {
      this.messageInputNgModel = this.messageCacheNgModel;
      this.messageCacheNgModel = '';
      this.isMessageWarning = false;
    }
  }

  validateMessage() {
    const message = this.messageInputNgModel;
    const charactersRegex = /[<>"'`]/;
    let wordsRegex = /^(\b\w+\b\s+){1,}\b\w+\b.*$/;

    if (
      this.messageInputNgModel == this.messageDefaultWarning ||
      this.messageInputNgModel == this.messageCharacterWarning
    ) {
      return;
    }

    if (charactersRegex.test(message)) {
      this.isMessageWarning = true;
      this.isMessageValid = false;
      this.areAllInputsValid = false;
      this.messageCacheNgModel = this.messageInputNgModel;
      this.messageInputNgModel = this.messageCharacterWarning;
    } else if (!wordsRegex.test(message)) {
      this.isMessageWarning = true;
      this.isMessageValid = false;
      this.areAllInputsValid = false;
      this.messageCacheNgModel = this.messageInputNgModel;
      this.messageInputNgModel = this.messageDefaultWarning;
    } else {
      this.isMessageValid = true;
      this.messageCacheNgModel = '';
      this.isMessageWarning = false;
      if (
        this.isNameValid &&
        this.isEmailValid &&
        this.isMessageValid &&
        this.isCheckboxChecked
      ) {
        this.areAllInputsValid = true;
      }
    }
  }

  // function to check if the checkbox is checked
  isCheckboxChecked: boolean = false;

  checkCheckBox() {
    this.isCheckboxChecked = !this.isCheckboxChecked;
    if (this.checkboxValidationField.length > 0) {
      this.checkboxValidationField = '';
    }
    if (this.areAllInputsValid) {
      this.areAllInputsValid = false;
      return;
    }
    if (this.isNameValid && this.isEmailValid && this.isMessageValid) {
      this.areAllInputsValid = true;
      return;
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
      this.isMessageValid &&
      this.isCheckboxChecked
    ) {
      this.areAllInputsValid = true;
    } else {
      this.areAllInputsValid = false;
    }
  }

  resetAllInputs() {
    this.isNameValid = false;
    this.isEmailValid = false;
    this.isMessageValid = false;
    this.isCheckboxChecked = false;
    this.nameInputNgModel = '';
    this.nameCacheNgModel = '';
    this.emailInputNgModel = '';
    this.emailCacheNgModel = '';
    this.messageInputNgModel = '';
    this.messageCacheNgModel = '';
  }

  adjustTextareaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // Reset the height to auto to make sure the textarea will shrink as well as grow
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}
