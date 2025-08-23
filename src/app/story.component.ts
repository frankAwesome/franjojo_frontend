// ...existing code...
// ...existing code...
// ...existing code...
import { Component, Input } from '@angular/core';

export interface Chapter {
  title: string;
  image?: string;
  description?: string;
  missions?: string[];
}

export interface Character {
  name: string;
  image?: string;
  subtitle?: string;
  description?: string;
  type?: string;
  id?: number;
  timestamp?: string;
}

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  showDialogClient = false;

  openDialogClient() {
    this.showDialogClient = true;
  }

  closeDialogClient() {
    this.showDialogClient = false;
  }
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() chapters: Chapter[] = [];
  @Input() characters: Character[] = [];
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


}
