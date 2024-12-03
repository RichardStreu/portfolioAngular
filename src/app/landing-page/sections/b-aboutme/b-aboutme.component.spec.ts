import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BAboutmeComponent } from './b-aboutme.component';

describe('BAboutmeComponent', () => {
  let component: BAboutmeComponent;
  let fixture: ComponentFixture<BAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BAboutmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
