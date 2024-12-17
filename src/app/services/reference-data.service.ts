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
        name: 'M. Lapiello',
        position: 'Team Member',
        referenceText: {
          en: 'Richard played a pivotal role in the success of the project. Notably, he successfully designed the majority of our API service, which was central to the project’s functionality. Additionally, his excellent expertise in CSS significantly enhanced the design of our interface. Richard was always punctual, reliable, and consistently supportive of the team.',
          de: 'Richard hat entscheidend zum Erfolg des Projekts beigetragen. Besonders hervorzuheben ist, dass er den Großteil unseres API-Services erfolgreich gestaltet hat, was zentral für die Projektfunktionalität war. Zudem besitzt er exzellentes CSS-Fachwissen, das die Gestaltung unserer Oberfläche maßgeblich verbessert hat. Richard war stets pünktlich, zuverlässig und jederzeit hilfsbereit gegenüber dem Team.',
        },
      },
      {
        name: 'M. Rinke',
        position: 'Team Member',
        referenceText: {
          en: 'Richard contributed to the technical implementation with his JavaScript and CSS skills, driving the project forward functionally. Our collaboration was highly productive and effectively advanced the project.',
          de: 'Richard hat mit seinen JavaScript- und CSS-Kenntnissen zur technischen Umsetzung beigetragen und das Projekt funktional vorangebracht. Unsere Zusammenarbeit war sehr produktiv und hat das Projekt effektiv voran gebracht.',
        },
      },
      {
        name: 'D. Werner',
        position: 'Team Member',
        referenceText: {
          en: 'Richard has made a significant contribution to the success of the JOIN project. He brought an excellent atmosphere to the team and played a major role in the API service. Thanks to his outstanding CSS skills and advanced JavaScript expertise, he carried a significant part of the project independently and helped us successfully complete it. His punctuality, reliability, and creative ideas further strengthened the team and motivated us to meet the deadline.',
          de: 'Richard hat zum Erfolg des JOIN Projektes sehr beigetragen. Er hat eine super Stimmung ins Team gebracht und einen großen Teil im API-Service beigetragen. Durch seine tollen CSS-Kenntnisse und seine fortgeschrittenen JavaScript-Kenntnisse hat er einen großen Teil des Projekts eigenständig getragen und uns geholfen, das Projekt erfolgreich abzuschließen. Durch seine Pünktlichkeit, Zuverlässigkeit und seine einfallsreichen Ideen hat er das Team zusätzlich gestärkt und neu motiviert, um die Deadline einhalten zu können.',
        },
      },
    ];
  }
}
