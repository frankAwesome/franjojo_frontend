import { Component, Input } from '@angular/core';

export interface Chapter {
  title: string;
  image?: string;
}

export interface Character {
  name: string;
  image?: string;
}

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() chapters: Chapter[] = [];
  @Input() characters: Character[] = [];
  @Input() edit?: () => void;
}
