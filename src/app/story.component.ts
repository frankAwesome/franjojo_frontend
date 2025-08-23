// ...existing code...
// ...existing code...
// ...existing code...
import { Component, Input } from '@angular/core';

export interface Milestone {
  id: number;
  name: string;
  completed: boolean;
  timestamp: string;
}

export interface Chapter {
  title: string;
  image?: string;
  description?: string;
  milestones?: Milestone[];
}

export interface Character {
  name: string;
  image?: string;
  role?: string;
  subtitle?: string;
}

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  @Input() storyId!: number;
  showDialogClient = false;
  dialogStory: any = null;

  openDialogClient() {
    this.dialogStory = {
      storyId: this.storyId,
      title: this.title,
      description: this.description,
      chapters: this.chapters,
      characters: this.characters
    };
    this.showDialogClient = true;
  }

  closeDialogClient() {
    this.showDialogClient = false;
    this.dialogStory = null;
  }
  @Input() title!: string;
  @Input() description!: string;
  @Input() chapters!: Chapter[];
  @Input() characters!: Character[];
  @Input() edit?: () => void;

  currentChapterIndex = 0;

  prevChapter() {
    if (this.currentChapterIndex > 0) {
      this.currentChapterIndex--;
    }
  }

  nextChapter() {
    if (this.currentChapterIndex < this.chapters.length - 1) {
  this.currentChapterIndex++;
    }
  }

  goToChapter(index: number) {
    this.currentChapterIndex = index;
  }

  // All character images should now be provided directly from the API via the 'image' property.
}
