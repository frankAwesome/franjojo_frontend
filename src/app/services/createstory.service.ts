import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CreateStoryService {
  private apiUrl = 'https://franklerk.co.za/v1/addGameStory';

  constructor(private http: HttpClient) {}

  addGameStory(story: any, token: string): Observable<any> {
    return this.http.post(this.apiUrl, story, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}
