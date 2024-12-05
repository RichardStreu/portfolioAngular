import { Component, Input, inject, Renderer2, ElementRef } from '@angular/core';
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
  @Input({ required: true }) index: number = 0;

  positionTop: string = '';
  image: string = '';

  mathPositionTop() {
    if (this.index == 0) {
      this.positionTop = '20px';
    } else if (this.index < this.projectData.length - 1) {
      let basicPercent = 100 / (this.projectData.length * 2);
      let percent = basicPercent + basicPercent * 2 * this.index;
      this.positionTop = `calc(${percent}% - 76px)`;
    } else {
      this.positionTop = 'calc(100% - 172px)';
    }
  }

  ngOnInit() {
    this.mathPositionTop();
    this.image = this.projectData[this.index].projectImg;
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  showThumbnail(index: number) {
    let thumbnail = this.el.nativeElement.querySelector(
      `#thumbnailBoxNr${index}`
    );
    if (thumbnail) {
      this.renderer.addClass(thumbnail, 'd_block');
      setTimeout(() => {
        this.renderer.addClass(thumbnail, 'opacity_1');
      }, 20);
    }
  }

  hideThumbnail(index: number) {
    let thumbnail = this.el.nativeElement.querySelector(
      `#thumbnailBoxNr${index}`
    );
    if (thumbnail) {
      this.renderer.removeClass(thumbnail, 'opacity_1');
      setTimeout(() => {
        this.renderer.removeClass(thumbnail, 'd_block');
      }, 220);
    }
  }
}
