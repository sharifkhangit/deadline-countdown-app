import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DeadlineResponse { secondsLeft: number; }

@Injectable({ providedIn: 'root' })
export class DeadlineService {
  constructor(private http: HttpClient) {}
  getDeadline(): Observable<DeadlineResponse> {
    return this.http.get<DeadlineResponse>('/api/deadline');
  }
}
