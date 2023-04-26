// quiz.component.ts

import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../quiz.service';
import { Quiz } from '../../Model/Quiz';


@Component({
  selector: 'app-quiz', // Update with the selector for your quiz component
  templateUrl: './quiz.component.html', // Update with the correct file path for your template file
  styleUrls: ['./quiz.component.css'] // Update with the correct file path for your CSS file(s)
})
export class QuizComponent implements OnInit {
  quizzes: Quiz[];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getQuizzes().subscribe(
      (quizzes: Quiz[]) => {
        this.quizzes = quizzes;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  createQuiz(quiz: Quiz) {
    this.quizService.createQuiz(quiz).subscribe(
      (createdQuiz: Quiz) => {
        // Handle success
        console.log('Quiz created:', createdQuiz);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateQuiz(quiz: Quiz) {
    this.quizService.updateQuiz(quiz).subscribe(
      (updatedQuiz: Quiz) => {
        // Handle success
        console.log('Quiz updated:', updatedQuiz);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteQuiz(id: number) {
    this.quizService.deleteQuiz(id).subscribe(
      () => {
        // Handle success
        console.log('Quiz deleted:', id);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
