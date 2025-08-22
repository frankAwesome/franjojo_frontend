import { Component, AfterViewInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  stories = [
    {
      title: 'The Lost Kingdom',
      description: 'An epic tale of adventure and discovery in a forgotten land. The heroes must overcome ancient traps, solve riddles, and unite the people to restore peace. Along the way, they discover the true meaning of friendship and courage.',
      chapters: ['Arrival', 'The Secret Map', 'The Great Battle', 'The Reunion', 'The New Dawn'],
      characters: ['Aria', 'Dax', 'King Eldor', 'Mira', 'The Oracle']
    },
    {
      title: 'Mystery of the Old Manor',
      description: 'A suspenseful story about a haunted house and its secrets. Each chapter unravels a new clue, and the characters must face their fears to uncover the truth behind the manor’s ghostly inhabitants.',
      chapters: ['The Invitation', 'Midnight Whispers', 'The Final Clue', 'The Secret Room'],
      characters: ['Lila', 'Detective Rowan', 'The Butler', 'Mrs. Black', 'The Ghost']
    }
  ];

  selectedStory: any = null;

  openStory(story: any) {
    this.selectedStory = story;
  }

  closeStory() {
    this.selectedStory = null;
  }

  ngAfterViewInit() {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 80 },
          color: { value: '#fff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 4 },
          line_linked: { enable: true, color: '#fff', opacity: 0.4 },
          move: { enable: true, speed: 2 }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' }
          },
          modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }
  }
}
