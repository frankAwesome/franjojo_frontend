import { Component } from '@angular/core';
import { CreateStoryService } from './services/createstory.service';

@Component({
  selector: 'app-createstory',
  templateUrl: './createstory.component.html',
  styleUrls: ['./createstory.component.scss']
})

export class CreateStoryComponent {
  story: any = {
    storyId: 0,
    title: '',
    lore: '',
    characters: [],
    chapters: [],
    timestamp: ''
  };
  submitMessage: string = '';
  submitError: string = '';

  constructor(private createStoryService: CreateStoryService) {}

  addCharacter() {
    this.story.characters.push({
      id: 0,
      name: '',
      subtitle: '',
      image: '',
      description: '',
      type: 'npc',
      timestamp: ''
    });
  }

  removeCharacter(idx: number) {
    this.story.characters.splice(idx, 1);
  }

  addChapter() {
    this.story.chapters.push({
      id: 0,
      title: '',
      image: '',
      milestones: [],
      description: '',
      timestamp: ''
    });
  }

  removeChapter(idx: number) {
    this.story.chapters.splice(idx, 1);
  }

  addMilestone(chapIdx: number) {
    this.story.chapters[chapIdx].milestones.push({
      id: 0,
      name: '',
      completed: false,
      timestamp: ''
    });
  }

  removeMilestone(chapIdx: number, msIdx: number) {
    this.story.chapters[chapIdx].milestones.splice(msIdx, 1);
  }

  submitStory() {
    this.submitMessage = '';
    this.submitError = '';
    const token = localStorage.getItem('token');
    if (!token) {
      this.submitError = 'Not authenticated. Please log in.';
      return;
    }
    // Set IDs and timestamps if missing
  // Generate a unique storyId (e.g., timestamp-based)
  this.story.storyId = Math.floor(Date.now() / 1000); // 10-digit integer
  const now = new Date().toISOString();
  this.story.timestamp = now;
    this.story.characters.forEach((c: any, i: number) => {
      c.id = c.id || i + 1;
      c.timestamp = now;
    });
    this.story.chapters.forEach((ch: any, ci: number) => {
      ch.id = ch.id || ci + 1;
      ch.timestamp = now;
      ch.milestones.forEach((m: any, mi: number) => {
        m.id = m.id || mi + 1;
        m.timestamp = now;
      });
    });
    this.createStoryService.addGameStory(this.story, token).subscribe({
      next: () => {
        this.submitMessage = 'Story created successfully!';
        this.submitError = '';
      },
      error: (err) => {
        this.submitError = 'Failed to create story.';
        this.submitMessage = '';
        console.error(err);
      }
    });
  }
}
