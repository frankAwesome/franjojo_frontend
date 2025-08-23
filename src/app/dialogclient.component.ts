import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { StoryService, Story, Character, Chapter, Milestone } from './services/story.service';
import { DialogService, GetNPCDialogRequest } from './services/dialog.service';

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
  selectedProtagonistId: number | null = null;
  selectedNpcId: number | null = null;
  selectedChapterId: number | null = null;
  selectedMilestones: { [id: number]: boolean } = {};
  dialogText: string = '';
  response: any = null;
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
    if (!this.selectedStoryId || !this.selectedProtagonistId || !this.selectedNpcId || !this.selectedChapterId) {
      this.error = 'Please select all fields.';
      return;
    }
    const milestonesArr = this.milestones
      .filter(m => this.selectedMilestones[m.id])
      .map(m => ({ id: m.id, completed: true }));
    const payload: GetNPCDialogRequest = {
      dialogText: this.dialogText,
      storyId: this.selectedStoryId,
      protagonistId: this.selectedProtagonistId,
      npcId: this.selectedNpcId,
      chapterId: this.selectedChapterId,
      milestones: milestonesArr
    };
    this.dialogService.getNPCDialog(payload).subscribe({
      next: (res) => {
        this.response = res;
        this.error = null;
      },
      error: () => {
        this.error = 'Failed to get dialog.';
      }
    });
  }
}
