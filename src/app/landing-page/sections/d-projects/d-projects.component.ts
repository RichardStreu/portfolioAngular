import { Component } from '@angular/core';
import { ProjectDataService } from '../../../services/project-data.service';

@Component({
  selector: 'app-d-projects',
  standalone: true,
  imports: [],
  templateUrl: './d-projects.component.html',
  styleUrl: './d-projects.component.scss'
})
export class DProjectsComponent {

  constructor(private projectData: ProjectDataService) {}

}
