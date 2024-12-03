import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReferencesComponent } from './e-references.component';

describe('EReferencesComponent', () => {
  let component: EReferencesComponent;
  let fixture: ComponentFixture<EReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EReferencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
