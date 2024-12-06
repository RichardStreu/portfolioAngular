import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailBoxComponent } from './thumbnail-box.component';

describe('ThumbnailBoxComponent', () => {
  let component: ThumbnailBoxComponent;
  let fixture: ComponentFixture<ThumbnailBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbnailBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThumbnailBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
