import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './Model/Quiz';

@Injectable()
export class QuestionService {
  private apiUrl = 'http://localhost:8085/Questions';

  constructor(private http: HttpClient) {}

  // Get all questions
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}?_expand=quiz`);
  }

  // Create a question
  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.apiUrl, question);
  }

  // Update a question
  updateQuestion(question: Question): Observable<Question> {
    const url = `${this.apiUrl}/${question.id}`;
    return this.http.put<Question>(url, question);
  }

  // Delete a question
  deleteQuestion(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
