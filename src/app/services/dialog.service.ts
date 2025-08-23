import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GetNPCDialogRequest {
  dialogText: string;
  storyId: number;
  protagonistId: number;
  npcId: number;
  chapterId: number;
  milestones: { id: number; completed: boolean }[];
}

@Injectable({ providedIn: 'root' })
export class DialogService {
  private apiUrl = 'https://13.49.67.7/v1/getNPCDialog';

  constructor(private http: HttpClient) {}

  getNPCDialog(data: GetNPCDialogRequest): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
