import { Injectable, ElementRef, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowThumbnailService {
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
