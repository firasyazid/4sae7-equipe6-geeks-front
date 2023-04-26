import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../question.service';
import { QuizService } from '../../quiz.service';
import { Question } from '../../Model/Quiz';
import { Quiz } from '../../Model/Quiz';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Question[];
  quizzes: Quiz[];

  constructor(
    private questionService: QuestionService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.getQuestions();
    this.getQuizzes();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  getQuizzes(): void {
    this.quizService.getQuizzes()
      .subscribe(quizzes => this.quizzes = quizzes);
  }

  createQuestion(question: Question) {
    this.questionService.createQuestion(question).subscribe(
      (createdQuestion: Question) => {
        // Handle success
        console.log('Question created:', createdQuestion);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  delete(question: Question): void {
    this.questions = this.questions.filter(q => q !== question);
    this.questionService.deleteQuestion(question.id).subscribe();
  }

  updateQuestion(question: Question): void {
    this.questionService.updateQuestion(question).subscribe();
  }
}
