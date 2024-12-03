import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DProjectsComponent } from './d-projects.component';

describe('DProjectsComponent', () => {
  let component: DProjectsComponent;
  let fixture: ComponentFixture<DProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
