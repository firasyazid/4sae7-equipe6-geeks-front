import { Component, OnInit } from '@angular/core';
import { Course, Lesson } from '../../Model/Quiz';
import { LessonService } from '../../Service/lesson.service';

@Component({
  selector: 'bluebits-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})


export class LessonComponent implements OnInit {
  lessons: Lesson[];
  course: Course[];
  showAddDialog: boolean = false;
  globalFilterValue: string;

  constructor(
    private lessonService: LessonService
    ){}

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons(): void {
    this.lessonService.getLessons()
    .subscribe(lessons => this.lessons = lessons);
  }

  newLesson: Lesson = {
    id: null,
    name: '',
    description: '',
    videoUrl: '',
    videoTitle: '',
    course: null
  };


  createLesson(lesson: Lesson) {
    this.lessonService.createLesson(lesson).subscribe(
      (createdLesson: Lesson) => {
        // Handle success
        console.log('Lesson created:', createdLesson);
        this.getLessons(); // Refresh the lesson list

      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getCorsSafeUrl(videoUrl: string): string {
    const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
    return corsProxyUrl + videoUrl;
  }

  addLesson(lesson: Lesson): void {
    this.lessonService.createLesson(lesson).subscribe(
      (createdLesson: Lesson) => {
        // Handle success
        console.log('Lesson created add:', createdLesson);
        this.showAddDialog = false; // Close the dialog
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


  delete(lesson: Lesson): void {
    this.lessons = this.lessons.filter(q => q !== lesson);
    this.lessonService.deleteLesson(lesson.id).subscribe();
  }

  updateLesson(lesson: Lesson): void {
    this.lessonService.updateLesson(lesson).subscribe();
  }

}
