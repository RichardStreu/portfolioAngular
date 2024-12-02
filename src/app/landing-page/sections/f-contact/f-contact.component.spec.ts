import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FContactComponent } from './f-contact.component';

describe('FContactComponent', () => {
  let component: FContactComponent;
  let fixture: ComponentFixture<FContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
