import { Component, AfterViewInit, OnInit } from '@angular/core';
import { StoryService, Story } from './services/story.service';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  stories: Story[] = [];
  constructor(private storyService: StoryService) {}

  ngOnInit() {
    this.storyService.getAllStories().subscribe({
      next: (res) => {
        // Map API fields to expected fields for the story component
        this.stories = res.stories.map(story => ({
          ...story,
          title: story.title, // Use 'title' from API for heading
          description: story.lore // Use 'lore' for description
        }));
      },
      error: (err) => {
        this.stories = [];
      }
    });
  }

  selectedStory: any = null;

  openStory(story: any) {
    this.selectedStory = story;
  }

  getEditFn(story: any) {
    return () => this.openStory(story);
  }

  closeStory() {
    this.selectedStory = null;
  }

  ngAfterViewInit() {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 120 },
          color: { value: ['#fff', '#b0c4de', '#87ceeb', '#e0e0e0'] },
          shape: { type: 'circle' },
          opacity: { value: 0.85 },
          size: { value: 2, random: true },
          line_linked: { enable: false },
          move: { enable: true, speed: 0.7, direction: 'none', random: true, straight: false, out_mode: 'out' }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' }
          },
          modes: {
            repulse: { distance: 80 },
            push: { particles_nb: 2 }
          }
        },
        retina_detect: true
      });
    }
  }
}
