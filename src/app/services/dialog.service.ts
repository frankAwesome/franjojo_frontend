import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DialogService {
  private apiUrl = 'https://franklerk.co.za/v1/getDialog';

  constructor(private http: HttpClient) {}

  /**
   * Call dialog endpoint with JWT token in Authorization header.
   * @param storyId story id
   * @param npcId npc id
   * @param data dialog payload (playerQuestion, activeChapterId, completedChapterIds, milestones)
   * @param token JWT token (from login or Firebase)
   */
  getDialog(storyId: number, npcId: number, data: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.post(`${this.apiUrl}/${storyId}/${npcId}`, data, { headers });
  }
}
