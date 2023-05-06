// quiz.component.ts

import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../Service/quiz.service';
import { Question, Quiz } from '../../Model/Quiz';
import { QuestionService } from '../../Service/question.service';
import { map } from 'rxjs/operators';
import {Router} from "@angular/router"




@Component({
  selector: 'app-quiz', // Update with the selector for your quiz component
  templateUrl: './quiz.component.html', // Update with the correct file path for your template file
  styleUrls: ['./quiz.component.css'] // Update with the correct file path for your CSS file(s)
})
export class QuizComponent implements OnInit {
  quizzes: Quiz[];
  questions: Question[];
  showAddDialog : boolean = false;
  globalFilterValue: string;
  selectedQuestion: Question;
  urlpdf: string;

  constructor(
    private quizService: QuizService,
    private questionService: QuestionService,
    private router: Router) {}

  ngOnInit() {
    this.loadQuizzes();
    this.getQuestions();
  }

  newQuiz: Quiz = {
    id: null,
    name: '',
    questions: []
  }

  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(questions => this.questions = questions);
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

  ExportQuiz(id: number) {
    this.quizService.exportQuizToPdf(id).subscribe(response => {
      const file = new Blob([response], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank');
    });
  }
  

  addQuestionToQuiz(quizId: number, questionId: number): void {
    this.quizService.AddquestionToQuiz(quizId, questionId).subscribe(
      (updatedQuiz: Quiz) => {
        // Handle success
        console.log('Question added to Quiz:', updatedQuiz);
        this.loadQuizzes(); // Refresh the question list
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
