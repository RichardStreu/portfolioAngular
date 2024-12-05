import { Component, Input } from '@angular/core';
import { ProjectDataService } from '../../../../services/project-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thumbnail-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumbnail-box.component.html',
  styleUrl: './thumbnail-box.component.scss',
})
export class ThumbnailBoxComponent {
  @Input('projectData') projectData: any;
  @Input('index') index: number = 0;

  positionTop: string = '';

  mathPositionTop() {
    if (this.index == 0) {
      this.positionTop = '0px';
    } else if (this.index == this.projectData.length - 1) {
      this.positionTop = 'calc(100% - 192px)';
    } else {
      this.positionTop = 'calc(50% - 96px)';
    }
  }

  constructor() {
    
    

    this.mathPositionTop();
    console.log(this.projectData);
  }
}
