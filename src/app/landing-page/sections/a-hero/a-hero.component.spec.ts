import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AHeroComponent } from './a-hero.component';

describe('AHeroComponent', () => {
  let component: AHeroComponent;
  let fixture: ComponentFixture<AHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
