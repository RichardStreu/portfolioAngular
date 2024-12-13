import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  languageService = inject(LanguageService);

  // variables to store the text for the contact form
  imprintText: string = "";
  mainText: string = "";
  informationText: string = "";
  representedByText: string = "";
  contactText: string = "";
  disclaimerText: string = "";
  contentText: string = "";
  contentDataText: string = "";
  linksText: string = "";
  linksDataText: string = "";
  copyRightText = "";
  copyRightDataText = "";
  protectionText = "";
  protectionDataText = "";
  websiteText = "";
  fromText = "";


  chooseImprintText() {
    this.imprintText =
      this.languageService.currentLanguage == 'en'
        ? "Imprint"
        : 'Impressum';
  }
  chooseInformationText() {
    this.informationText =
      this.languageService.currentLanguage == 'en'
        ? "Information according to § 5 DDG"
        : 'Angaben gemäß § 5 DDG';
  }
  chooseRepresentedByText() {
    this.representedByText =
      this.languageService.currentLanguage == 'en'
        ? "Represented by:"
        : 'Vertreten durch:';
  }
  chooseContactText() {	
    this.contactText =	
      this.languageService.currentLanguage == 'en'	
        ? "Contact"	
        : 'Kontakt';	
  }
  chooseDisclaimerText() {
    this.disclaimerText =
      this.languageService.currentLanguage == 'en'
        ? "Disclaimer"
        : 'Haftungsausschluss';
  }
  chooseContentText() {
    this.contentText =
      this.languageService.currentLanguage == 'en'
        ? "Liability for content"
        : 'Haftung für Inhalte';
  }
  chooseContentDataText() {
    this.contentDataText =
      this.languageService.currentLanguage == 'en'
        ? "The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content. As a service provider, we are responsible for our own content on these pages according to § 7 Abs.1 DDG under general laws. According to §§ 8 to 10 DDG, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of such violations, we will remove this content immediately."
        : 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.';
  }
  chooseLinksText() {
    this.linksText =
      this.languageService.currentLanguage == 'en'
        ? "Liability for links"
        : 'Haftung für Links';
  }
  chooseLinksDataText() {
    this.linksDataText =
      this.languageService.currentLanguage == 'en'
        ? "Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. A permanent content control of the linked pages is not reasonable without concrete evidence of a violation of the law. Upon becoming aware of legal violations, we will remove such links immediately."
        : 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.';
  }
  chooseCopyRightText() {
    this.copyRightText =
      this.languageService.currentLanguage == 'en'
        ? 'CopyRight'
        : 'Urheberrecht';
  }
  chooseCopyRightDataText() {
    this.copyRightDataText =
      this.languageService.currentLanguage == 'en'
        ? "The content and works created by the site operators on these pages are subject to German copyright law. The duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately."
        : 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.';
  }
  chooseProtectionText() {
    this.protectionText =
      this.languageService.currentLanguage == 'en'
        ? 'Data Protection'
        : 'Datenschutz';
  }
  chooseProtectionDataText() {
    this.protectionDataText =
      this.languageService.currentLanguage == 'en'
        ? "The use of our website is usually possible without providing personal data. Insofar as personal data (for example, name, address, or email addresses) are collected on our pages, this is always done on a voluntary basis as far as possible. These data will not be passed on to third parties without your express consent. We point out that data transmission over the Internet (e.g., communication by email) can have security gaps. A complete protection of the data from access by third parties is not possible. The use of contact data published within the framework of the imprint obligation by third parties for sending unsolicited advertising and information materials is hereby expressly prohibited. The operators of the pages expressly reserve the right to take legal action in the event of unsolicited sending of advertising information, such as spam emails."
        : "Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.";

  }
  chooseWebsiteText() {
    this.websiteText =
      this.languageService.currentLanguage == 'en'
        ? "Website imprint created by "
        : 'Website Impressum erstellt durch ';
  }
  chooseFromText() {
    this.fromText =
      this.languageService.currentLanguage == 'en'
        ? " from the "
        : ' von der ';  
  }

  // function to change the language of the contact form
  chooseLanguage() {
    this.languageService.language.subscribe(() => {
      this.chooseImprintText();
      this.chooseInformationText();
      this.chooseRepresentedByText();
      this.chooseContactText();	
      this.chooseDisclaimerText();
      this.chooseContentText();
      this.chooseContentDataText();
      this.chooseLinksText();
      this.chooseLinksDataText();
      this.chooseCopyRightText();
      this.chooseCopyRightDataText();
      this.chooseProtectionText();
      this.chooseProtectionDataText();
      this.chooseWebsiteText();
      this.chooseFromText();
    });
  }

  constructor() {
    this.chooseLanguage();
  }

}
