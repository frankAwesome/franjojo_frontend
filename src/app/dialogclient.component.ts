import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { StoryService, Story, Character, Chapter, Milestone } from './services/story.service';
import { DialogService, GetNPCDialogRequest } from './services/dialog.service';


export interface DialogMessage {
  text: string;
  sender: 'user' | 'npc';
}

@Component({
  selector: 'app-dialogclient',
  templateUrl: './dialogclient.component.html',
  styleUrls: ['./dialogclient.component.scss']
})

export class DialogClientComponent implements OnInit {
  @Input() story?: Story;
  @Output() closeDialog = new EventEmitter<void>();

  stories: Story[] = [];
  characters: Character[] = [];
  chapters: Chapter[] = [];
  milestones: Milestone[] = [];

  selectedStoryId: number | null = null;
  selectedNpcId: number | null = null;
  selectedChapterId: number | null = null;
  selectedMilestones: { [id: number]: boolean } = {};
  dialogText: string = '';
  response: any = null;
  messageHistory: DialogMessage[] = [];
  error: string | null = null;

  constructor(private storyService: StoryService, private dialogService: DialogService) {}

  ngOnInit() {
    if (this.story) {
      this.selectedStoryId = this.story.storyId;
      this.characters = this.story.characters;
      this.chapters = this.story.chapters;
      if (this.chapters.length > 0) {
        this.selectedChapterId = this.chapters[0].id;
        this.milestones = this.chapters[0].milestones;
      }
    } else {
      this.storyService.getAllStories().subscribe({
        next: (res) => {
          this.stories = res.stories;
          if (this.stories.length > 0) {
            this.selectedStoryId = this.stories[0].storyId;
            this.characters = this.stories[0].characters;
            this.chapters = this.stories[0].chapters;
            if (this.chapters.length > 0) {
              this.selectedChapterId = this.chapters[0].id;
              this.milestones = this.chapters[0].milestones;
            }
          }
        },
        error: () => {
          this.error = 'Failed to load stories.';
        }
      });
    }
  }

  onChapterChange() {
    const chapter = this.chapters.find(c => c.id === this.selectedChapterId);
    this.milestones = chapter ? chapter.milestones : [];
    this.selectedMilestones = {};
  }

  submitDialog() {
    if (!this.selectedStoryId || !this.selectedNpcId || !this.selectedChapterId) {
      this.error = 'Please select all fields.';
      return;
    }
    const milestonesArr = this.milestones
      .filter(m => this.selectedMilestones[m.id])
      .map(m => ({ id: m.id, completed: true }));
    const payload: any = {
      dialogText: this.dialogText,
      storyId: this.selectedStoryId,
      npcId: this.selectedNpcId,
      chapterId: this.selectedChapterId,
      milestones: milestonesArr
    };
    // Add user message to history
    this.messageHistory.push({ text: this.dialogText, sender: 'user' });
    this.dialogService.getNPCDialog(payload).subscribe({
      next: (res) => {
        this.response = res;
        this.error = null;
  // Use 'response' field from API response as NPC reply
  const npcText = res.response || JSON.stringify(res);
  this.messageHistory.push({ text: npcText, sender: 'npc' });
        this.dialogText = '';
      },
      error: () => {
        this.error = 'Failed to get dialog.';
      }
    });
  }
}
