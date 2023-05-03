import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../Service/question.service';
import { QuizService } from '../../Service/quiz.service';
import { AnswerService } from '../../Service/answer.service';
import { Question } from '../../Model/Quiz';
import { Quiz } from '../../Model/Quiz';
import { Answer } from '../../Model/Quiz';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Question[];
  quizzes: Quiz[];
  answers: Answer[];
  showAddDialog: boolean = false;
  globalFilterValue: string;


  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {
    this.getQuestions();
    this.getQuizzes();
    this.getAnswers();
  }

  getAnswers(): void {
    this.answerService.getAnswers()
      .subscribe(answers => this.answers = answers);
  }

  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  getQuizzes(): void {
    this.quizService.getQuizzes()
      .subscribe(quizzes => this.quizzes = quizzes);
  }

  newQuestion: Question = {
    id: null,
    description: '',
    quiz: null,
    answers: []
  };


  createQuestion(question: Question) {
    this.questionService.createQuestion(question).subscribe(
      (createdQuestion: Question) => {
        // Handle success
        console.log('Question created:', createdQuestion);
        this.getQuestions(); // Refresh the question list

      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addQuestion(question: Question): void {
    this.questionService.createQuestion(question).subscribe(
      (createdQuestion: Question) => {
        // Handle success
        console.log('Question created add:', createdQuestion);
        this.showAddDialog = false; // Close the dialog
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
