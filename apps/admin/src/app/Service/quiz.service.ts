import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../Model/Quiz';

@Injectable()
export class QuizService {
  private apiUrl = 'http://localhost:8085/Quizzes';

  constructor(private http: HttpClient) {}

  // Get all quizzes
  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.apiUrl);
  }

  // Create a quiz
  createQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.apiUrl, quiz);
  }

  // Update a quiz
  updateQuiz(quiz: Quiz): Observable<Quiz> {
    const url = `${this.apiUrl}/${quiz.id}`;
    return this.http.put<Quiz>(url, quiz);
  }

  // Delete a quiz
  deleteQuiz(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
