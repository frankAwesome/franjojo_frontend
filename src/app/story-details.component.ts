import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss']
})
export class StoryDetailsComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() chapters: string[] = [];
  @Input() characters: string[] = [];
}
