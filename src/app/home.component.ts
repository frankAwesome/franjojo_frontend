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
      title: 'The Three Pigs and the Wolf',
      description: 'A Minecraft-themed retelling of the classic tale, where three pigs build their homes and face the cunning wolf.',
      chapters: [
        {
          title: 'Pig 1 Builds a Straw House',
          image: 'https://firebasestorage.googleapis.com/v0/b/storysocial-23aa1.appspot.com/o/bb75154f-2a94-4123-8174-336468f26b0f.png?alt=media&token=8f5585c7-54d8-4c3a-ac3a-5e6056f43b18',
          description: 'Percy Pig quickly builds his house out of straw. It goes up fast, but is it strong enough to keep him safe?',
          missions: [
            'Gather straw from the field',
            'Build the house before sunset',
            'Test the house for strength'
          ]
        },
        {
          title: 'Pig 2 Builds a Wood House',
          image: 'https://preview.redd.it/eo6v6k01xua51.png?width=1080&crop=smart&auto=webp&s=ccb14a1e809cb302711311c15b55b2af2bdc8b4b',
          description: 'Penny Pig chooses wood for her home, hoping it will be sturdier than straw. She decorates it with flowers.',
          missions: [
            'Collect wood from the forest',
            'Build a wooden house with windows',
            'Decorate the house with flowers'
          ]
        },
        {
          title: 'Pig 3 Builds a Brick House',
          image: 'https://brightchamps.com/blog/wp-content/uploads/2022/11/Cute-houses-minecraft-3-1024x576.jpg',
          description: 'Peter Pig works hard to build a strong brick house. It takes longer, but he feels safe inside.',
          missions: [
            'Find clay and make bricks',
            'Build a sturdy brick house',
            'Invite siblings to visit'
          ]
        },
        {
          title: 'The Wolf Arrives',
          image: 'https://www.exitlag.com/blog/wp-content/uploads/2024/12/cute-minecraft-house-2.webp',
          description: 'The cunning wolf comes to the village, eyeing the pigs’ houses. He starts with Percy’s straw house.',
          missions: [
            'Scout the village for pigs',
            'Try to blow down the straw house',
            'Move to the next house if unsuccessful'
          ]
        },
        {
          title: 'The Pigs Stand Together',
          image: 'https://i.ytimg.com/vi/LTfN32O5f1o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkiG_d4VlXV0E_CbTr7pC_UibrBw',
          description: 'After the wolf blows down the straw and wood houses, all three pigs hide in Peter’s brick house and outsmart the wolf.',
          missions: [
            'Hide in the brick house',
            'Work together to defend the house',
            'Outsmart the wolf'
          ]
        }
      ],
      characters: [
        { name: 'Percy Pig', image: 'Pig 1', role: 'The quick builder (straw house)' },
        { name: 'Penny Pig', image: 'Pig 2', role: 'The creative builder (wood house)' },
        { name: 'Peter Pig', image: 'Pig 3', role: 'The careful builder (brick house)' },
        { name: 'Wolf', image: 'Wolf', role: 'The cunning antagonist' }
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
