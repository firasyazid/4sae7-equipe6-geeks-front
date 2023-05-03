import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lesson } from '../Model/Quiz';

@Injectable()
export class LessonService {
  private apiUrl = 'http://localhost:8085/Lessons';

  constructor(private http: HttpClient) {}

  // Get all Lessons
  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.apiUrl}?_expand=quiz`);
  }

  // Create a Lesson
  createLesson(lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(this.apiUrl, lesson);
  }

  // Update a lesson
  updateLesson(lesson: Lesson): Observable<Lesson> {
    const url = `${this.apiUrl}/${lesson.id}`;
    return this.http.put<Lesson>(url, lesson);
  }

  // Delete a Lesson
  deleteLesson(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
