import { Component, Input, OnInit } from '@angular/core';
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
    } else if (this.index < this.projectData.length - 1) {
      let basicPercent = 100 / (this.projectData.length * 2);
      let percent = basicPercent + (basicPercent * 2 * this.index);
      this.positionTop = `calc(${percent}% - 96px)`;
    } else {
      this.positionTop = 'calc(100% - 192px)';
    }
  }

  constructor() {}

  ngOnInit() {
    this.mathPositionTop();
  }
}
