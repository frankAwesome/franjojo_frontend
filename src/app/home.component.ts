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
      chapters: [
        { title: 'Arrival', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', description: 'The heroes arrive in the forgotten land, greeted by mysterious ruins and a sense of adventure.' },
        { title: 'The Secret Map', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', description: 'A hidden map is discovered, revealing the path to the lost kingdom and its many dangers.' },
        { title: 'The Great Battle', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80', description: 'An epic confrontation with ancient guardians tests the courage and unity of the group.' },
        { title: 'The Reunion', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80', description: 'Long-lost friends and allies are reunited, bringing hope to the quest.' },
        { title: 'The New Dawn', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', description: 'With peace restored, the land awakens to a new era of prosperity and friendship.' }
      ],
      characters: [
        { name: 'Aria', image: 'https://randomuser.me/api/portraits/women/1.jpg', role: 'Protagonist' },
        { name: 'Dax', image: 'https://randomuser.me/api/portraits/men/2.jpg', role: 'Protagonist' },
        { name: 'King Eldor', image: 'https://randomuser.me/api/portraits/men/3.jpg', role: 'Mentor' },
        { name: 'Mira', image: 'https://randomuser.me/api/portraits/women/4.jpg', role: 'Companion' },
        { name: 'The Oracle', image: 'https://randomuser.me/api/portraits/women/5.jpg', role: 'Guide' }
      ]
    },
    {
      title: 'Mystery of the Old Manor',
      description: 'A suspenseful story about a haunted house and its secrets. Each chapter unravels a new clue, and the characters must face their fears to uncover the truth behind the manor’s ghostly inhabitants.',
      chapters: [
        { title: 'The Invitation', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', description: 'A mysterious letter invites the group to the old manor, setting the stage for the haunting.' },
        { title: 'Midnight Whispers', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', description: 'Strange voices and eerie sounds fill the night, deepening the mystery.' },
        { title: 'The Final Clue', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', description: 'A crucial clue is uncovered, bringing the truth within reach.' },
        { title: 'The Secret Room', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80', description: 'A hidden room reveals the manor’s darkest secret and the mystery is finally solved.' }
      ],
      characters: [
        { name: 'Lila', image: 'https://randomuser.me/api/portraits/women/6.jpg', role: 'Protagonist' },
        { name: 'Detective Rowan', image: 'https://randomuser.me/api/portraits/men/7.jpg', role: 'Detective' },
        { name: 'The Butler', image: 'https://randomuser.me/api/portraits/men/8.jpg', role: 'Suspect' },
        { name: 'Mrs. Black', image: 'https://randomuser.me/api/portraits/women/9.jpg', role: 'Suspect' },
        { name: 'The Ghost', image: 'https://randomuser.me/api/portraits/lego/1.jpg', role: 'Antagonist' }
      ]
    }
  ];

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
