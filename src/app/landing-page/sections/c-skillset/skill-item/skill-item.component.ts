import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Skill {
  name: string;
  imgPath: string;
  effectClass: string;
  colorClass: string;
}

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss',
})
export class SkillItemComponent {
  @Input({ required: true }) skill!: Skill;
}
