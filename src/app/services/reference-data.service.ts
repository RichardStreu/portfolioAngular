import { Injectable } from '@angular/core';
import { Reference } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ReferenceDataService {
  references: Reference[] = [];

  constructor() {
    this.references = [
      {
        name: 'Marco Lapiello',
        position: 'Team Member',
        referenceText: {
          en: "Richard made a significant contribution to the success of the project. It is particularly noteworthy that he successfully designed the majority of our API services, which was central to the project's functionality. Additionally, he possesses excellent CSS expertise, which greatly improved the design of our interface. Richard was always punctual, reliable, and consistently helpful to the team.",
          de: "Richard hat entscheidend zum Erfolg des Projekts beigetragen. Besonders hervorzuheben ist, dass er den Großteil unseres API-Services erfolgreich gestaltet hat, was zentral für die Projektfunktionalität war. Zudem besitzt er exzellentes CSS-Fachwissen, das die Gestaltung unserer Oberfläche maßgeblich verbessert hat. Richard war stets pünktlich, zuverlässig und jederzeit hilfsbereit gegenüber dem Team.",
        },
      },
      {
        name: 'Mirko Rinke',
        position: 'Team Member',
        referenceText: {
          en: "Richard contributed to the technical implementation with his JavaScript and CSS skills, advancing the project's functionality. Our collaboration was very productive and effectively moved the project forward.",
          de: "Richard hat mit seinen JavaScript- und CSS-Kenntnissen zur technischen Umsetzung beigetragen und das Projekt funktional vorangebracht. Unsere Zusammenarbeit war sehr produktiv und hat das Projekt effektiv voran gebracht.",
        },
      },
      {
        name: 'David Werner',
        position: 'Team Member',
        referenceText: {
          en: "Richard made a significant contribution to the success of the JOIN project. He brought a great atmosphere to the team and played a major role in the API service. With his excellent CSS skills and advanced JavaScript knowledge, he independently handled a large part of the project and helped us successfully complete it. His punctuality, reliability, and creative ideas further strengthened and motivated the team to meet the deadline.",
          de: "Richard hat zum Erfolg des JOIN Projektes sehr beigetragen. Er hat eine super Stimmung ins Team gebracht und einen großen Teil im API-Service beigetragen. Durch seine tollen CSS-Kenntnisse und seine fortgeschrittenen JavaScript-Kenntnisse hat er einen großen Teil des Projekts eigenständig getragen und uns geholfen, das Projekt erfolgreich abzuschließen. Durch seine Pünktlichkeit, Zuverlässigkeit und seine einfallsreichen Ideen hat er das Team zusätzlich gestärkt und neu motiviert, um die Deadline einhalten zu können.",
        },
      },
    ];
  }
}
