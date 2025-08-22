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
        { title: 'Arrival', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
        { title: 'The Secret Map', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
        { title: 'The Great Battle', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80' },
        { title: 'The Reunion', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80' },
        { title: 'The New Dawn', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' }
      ],
      characters: [
        { name: 'Aria', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
        { name: 'Dax', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
        { name: 'King Eldor', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { name: 'Mira', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { name: 'The Oracle', image: 'https://randomuser.me/api/portraits/women/5.jpg' }
      ]
    },
    {
      title: 'Mystery of the Old Manor',
      description: 'A suspenseful story about a haunted house and its secrets. Each chapter unravels a new clue, and the characters must face their fears to uncover the truth behind the manor’s ghostly inhabitants.',
      chapters: [
        { title: 'The Invitation', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
        { title: 'Midnight Whispers', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
        { title: 'The Final Clue', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
        { title: 'The Secret Room', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80' }
      ],
      characters: [
        { name: 'Lila', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
        { name: 'Detective Rowan', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
        { name: 'The Butler', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
        { name: 'Mrs. Black', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
        { name: 'The Ghost', image: 'https://randomuser.me/api/portraits/lego/1.jpg' }
      ]
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
