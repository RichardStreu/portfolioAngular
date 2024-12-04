import { Component, Input } from '@angular/core';

interface Skill {
  name: string;
  img: string;
  effectClass: string;
  fillColor: string;
}

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss',
})
export class SkillItemComponent {
  @Input({ required: true }) skill!: Skill;
}
