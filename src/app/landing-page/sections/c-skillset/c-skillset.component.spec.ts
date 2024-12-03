import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSkillsetComponent } from './c-skillset.component';

describe('CSkillsetComponent', () => {
  let component: CSkillsetComponent;
  let fixture: ComponentFixture<CSkillsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSkillsetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CSkillsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
