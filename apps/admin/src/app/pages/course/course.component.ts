import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../Service/course.service';
import { Course } from '../../Model/Quiz'
import { Lesson } from '../../Model/Quiz';
import { QuizService } from '../../Service/quiz.service';
import { LessonService } from '../../Service/lesson.service';
import { NgForm } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'bluebits-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  courses: Course[];
  lessons: Lesson[];
  showAddDialog: boolean = false;
  globalFilterValue: string;
  selectedCourse: Course | null = null;
  file: File | null = null;

  constructor(
    private courseService: CourseService,
    private lessonService: LessonService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getCourses();
    this.getLessons();
  }



  getCourses(): void {
    this.courseService.getCourses().subscribe(courses => this.courses = courses);
  }

  getLessons(): void {
    this.lessonService.getLessons()
      .subscribe(lessons => this.lessons = lessons);
  }



  newCourse: Course = {
    id: null,
    name: '',
    description: '',
    pdfFileName: '',
    pdfFileContentType: '',
    pdfFileData: null,
    lessons: [],
  };

  createCourse(course: Course) {
    this.courseService.createCourse(course).subscribe(
      (createdCourse: Course) => {
        console.log('Course created:', createdCourse);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  affectpdftocourse(course: Course, file: File) {
    // Call the uploadPdfFile method in the service to upload the PDF file
    this.courseService.uploadPdfFile(course.id, file).subscribe(
      (response: Blob) => {
        console.log('PDF file uploaded:', response);
        // Update the course object with the file data
        course.pdfFileName = file.name;
        course.pdfFileContentType = file.type;
        course.pdfFileData = response;
        // Call the createCourse method in the service to create the course
        this.courseService.createCourse(course).subscribe(
          (createdCourse: Course) => {
            console.log('Course created:', createdCourse);
          },
          (error: any) => {
            console.error(error);
          }
        );
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  
  
  


  addCourse(course: Course): void {
    this.courseService.createCourse(course).subscribe(
      (createCourse: Course) => {
        // Handle success
        console.log('Course created:', createCourse);
        this.showAddDialog = false; // Close the dialog
        this.getCourses(); // Refresh the Course list
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


  delete(course: Course): void {
    this.courses = this.courses.filter(q => q !== course);
    this.courseService.deleteCourse(course.id).subscribe();
  }

  updateCourse(course: Course): void {
    this.selectedCourse = course;
    this.showAddDialog = true;
    this.courseService.updateCourse(course).subscribe();
  }

  updateSelectedCourse(form: NgForm): void {
    if (this.selectedCourse) {
      // Update the selectedCourse object with the form data
      this.selectedCourse.name = form.value.name;
      // ... other properties, if needed

      // Call the updateCourse method in the service
      this.courseService.updateCourse(this.selectedCourse).subscribe(
        (updatedCourse: Course) => {
          console.log('Course updated:', updatedCourse);
          this.showAddDialog = false; // Close the dialog
          this.getCourses(); // Refresh the Course list
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }

  confirmDelete(course: Course) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete the course "${course.name}"?`,
      accept: () => {
        this.delete(course);
      }
    });
  }

  
  onFileSelected(files: FileList) {
    this.file = files.item(0);
  }
  

  



}
