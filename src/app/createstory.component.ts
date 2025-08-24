
import { Component } from '@angular/core';
import { CreateStoryService } from './services/createstory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createstory',
  templateUrl: './createstory.component.html',
  styleUrls: ['./createstory.component.scss']
})

export class CreateStoryComponent {
  characterImages: string[] = [
    'https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg',
    'https://img.freepik.com/premium-psd/3d-illustration-smiling-young-man-cartoon-close-up-portrait-standing-black-man-with-sunglasses-pink-background-3d-avatar-ui-ux_1020-5079.jpg',
    'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611704.jpg',
    'https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611783.jpg'
  ];
  chapterImages: string[] = [
    'https://img.freepik.com/vector-gratis/fondo-plano-aventura-montanas_23-2149045825.jpg',
    'https://pic.pikbest.com/02/22/78/778888piCdwX.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQeryCOukrvcPf6w5Ax6gi3IQFwvCUt1hfxblysr8fqIhUlv21EimlHg5LK5HLN8VcXA&usqp=CAU',
    'https://img.freepik.com/free-vector/traveler-with-map-mountain-waterfall-landscape_107791-7840.jpg?semt=ais_hybrid&w=740&q=80'
  ];
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
  loading: boolean = false;

  constructor(private createStoryService: CreateStoryService, private router: Router) {}

  addCharacter() {
    const idx = this.story.characters.length;
    const image = this.characterImages[idx % this.characterImages.length];
    this.story.characters.push({
      id: 0,
      name: '',
      subtitle: '',
      image,
      description: '',
      type: 'npc',
      timestamp: ''
    });
  }

  removeCharacter(idx: number) {
    this.story.characters.splice(idx, 1);
  }

  addChapter() {
    const idx = this.story.chapters.length;
    const image = this.chapterImages[idx % this.chapterImages.length];
    this.story.chapters.push({
      id: 0,
      title: '',
      image,
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
    this.loading = true;
    const token = localStorage.getItem('token');
    if (!token) {
      this.submitError = 'Not authenticated. Please log in.';
      this.loading = false;
      return;
    }
    // Set IDs and timestamps if missing
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
        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['/home']);
        }, 900); // brief loader before redirect
      },
      error: (err) => {
        this.submitError = 'Failed to create story.';
        this.submitMessage = '';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
