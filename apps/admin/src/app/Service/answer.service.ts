import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from '../Model/Quiz';

@Injectable()
export class AnswerService {
  private apiUrl = 'http://localhost:8085/Answers';

  constructor(private http: HttpClient) {}

  // Get all Answers
  getAnswers(): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.apiUrl);
  }

  // Create a Answer
  createAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(this.apiUrl, answer);
  }

  // Update a answer
  updateAnswer(answer: Answer): Observable<Answer> {
    const url = `${this.apiUrl}/${answer.id}`;
    return this.http.put<Answer>(url, answer);
  }

  // Delete a Answer
  deleteAnswer(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
