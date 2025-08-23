import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Milestone {
  id: number;
  name: string;
  completed: boolean;
  timestamp: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  image: string;
  milestones: Milestone[];
  timestamp: string;
}

export interface Character {
  id: number;
  name: string;
  type: string;
  image: string;
  description: string;
  timestamp: string;
}

export interface Story {
  storyId: number;
  lore: string;
  characters: Character[];
  chapters: Chapter[];
  timestamp: string;
  title?: string;
  description?: string;
}

export interface GetAllStoriesResponse {
  stories: Story[];
  count: number;
}

@Injectable({ providedIn: 'root' })
export class StoryService {
  private apiUrl = 'https://13.49.67.7/v1/getAllStories';

  constructor(private http: HttpClient) {}

  getAllStories(): Observable<GetAllStoriesResponse> {
    return this.http.get<GetAllStoriesResponse>(this.apiUrl);
  }
}
