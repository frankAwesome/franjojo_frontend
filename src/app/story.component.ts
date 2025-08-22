import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() chapters: string[] = [];
  @Input() characters: string[] = [];
}
