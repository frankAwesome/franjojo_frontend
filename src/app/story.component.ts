// ...existing code...
// ...existing code...
// ...existing code...
import { Component, Input } from '@angular/core';

export interface Chapter {
  title: string;
  image?: string;
  description?: string;
}

export interface Character {
  name: string;
  image?: string;
  role?: string;
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
  @Input() title: string = 'The Three Pigs and the Wolf';
  @Input() description: string = 'A Minecraft-themed retelling of the classic tale, where three pigs build their homes and face the cunning wolf.';
  @Input() chapters: Chapter[] = [
    {
      title: 'Pig 1 Builds a Straw House',
      image: 'https://laby.net/api/v3/render/skin/8bb5b7f8f6314f128a68419ce4a8040c.png',
      description: 'Percy Pig quickly builds his house out of straw. It goes up fast, but is it strong enough to keep him safe?'
    },
    {
      title: 'Pig 2 Builds a Wood House',
      image: 'https://s.namemc.com/3d/skin/body.png?id=292a520f3c0d60a1&model=classic&width=308&height=308',
      description: 'Penny Pig chooses wood for her home, hoping it will be sturdier than straw. She decorates it with flowers.'
    },
    {
      title: 'Pig 3 Builds a Brick House',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JTmZNVMCDXEfuS7JE1IHJxrD6_0WpNvvQw1XL1ZWeowRWgJxQmFq6SyGuAwPgMNyAio&usqp=CAU',
      description: 'Peter Pig works hard to build a strong brick house. It takes longer, but he feels safe inside.'
    },
    {
      title: 'The Wolf Arrives',
      image: 'https://s.namemc.com/3d/skin/body.png?id=814cafedc6a44064&model=classic&width=308&height=308',
      description: 'The cunning wolf comes to the village, eyeing the pigs’ houses. He starts with Percy’s straw house.'
    },
    {
      title: 'The Pigs Stand Together',
      image: 'https://i.ytimg.com/vi/LTfN32O5f1o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkiG_d4VlXV0E_CbTr7pC_UibrBw',
      description: 'After the wolf blows down the straw and wood houses, all three pigs hide in Peter’s brick house and outsmart the wolf.'
    }
  ];
  @Input() characters: Character[] = [
    { name: 'Percy Pig', image: 'https://laby.net/api/v3/render/skin/8bb5b7f8f6314f128a68419ce4a8040c.png', role: 'The quick builder (straw house)' },
    { name: 'Penny Pig', image: 'https://s.namemc.com/3d/skin/body.png?id=292a520f3c0d60a1&model=classic&width=308&height=308', role: 'The creative builder (wood house)' },
    { name: 'Peter Pig', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JTmZNVMCDXEfuS7JE1IHJxrD6_0WpNvvQw1XL1ZWeowRWgJxQmFq6SyGuAwPgMNyAio&usqp=CAU', role: 'The careful builder (brick house)' },
    { name: 'Wolf', image: 'https://s.namemc.com/3d/skin/body.png?id=814cafedc6a44064&model=classic&width=308&height=308', role: 'The cunning antagonist' }
  ];
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

  // Optionally, keep this for legacy support if you want to map keywords to images:
  getGameCharacterImage(imageOrKeyword: string): string {
    // If the string looks like a URL, return it directly
    if (imageOrKeyword && (imageOrKeyword.startsWith('http://') || imageOrKeyword.startsWith('https://'))) {
      return imageOrKeyword;
    }
    // Otherwise, map known keywords to URLs
    const gameCharacterImages: { [key: string]: string } = {
      'Pig 1': 'https://laby.net/api/v3/render/skin/8bb5b7f8f6314f128a68419ce4a8040c.png',
      'Pig 2': 'https://s.namemc.com/3d/skin/body.png?id=292a520f3c0d60a1&model=classic&width=308&height=308',
      'Pig 3': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JTmZNVMCDXEfuS7JE1IHJxrD6_0WpNvvQw1XL1ZWeowRWgJxQmFq6SyGuAwPgMNyAio&usqp=CAU',
      'Wolf': 'https://s.namemc.com/3d/skin/body.png?id=814cafedc6a44064&model=classic&width=308&height=308',
      // Add more mappings as needed
    };
    return gameCharacterImages[imageOrKeyword] || 'https://upload.wikimedia.org/wikipedia/en/5/51/Steve_%28Minecraft%29.png';
  }
}
