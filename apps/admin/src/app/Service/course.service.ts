import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../Model/Quiz';
import { map } from 'rxjs/operators';


@Injectable()

export class CourseService {
  private apiUrl = 'http://localhost:8085/Courses'

  constructor(private http: HttpClient) { }

  //Get all courses
  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.apiUrl}`);
  }

// Create a Course
createCourse(course: Course): Observable<Course> {
  return this.http.post<Course>(this.apiUrl, course);
}

// Update a Course
updateCourse(course: Course): Observable<Course> {
  const url = `${this.apiUrl}/${course.id}`;
  return this.http.put<Course>(url, course);
}

// Delete a Course
deleteCourse(id: number): Observable<void> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete<void>(url);
}

//upload pdf
uploadPdfFile(id: number, file: File): Observable<Blob> {
  const formData = new FormData();
  formData.append('file', file);

  return this.http.post(`${this.apiUrl}/${id}/pdf`, formData, {
    responseType: 'blob' // This is to receive an ArrayBuffer response
  }).pipe(
    map(response => new Blob([response]))
  );
}




}