import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../../Service/answer.service';
import { Answer } from '../../Model/Quiz';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
})
export class AnswerComponent implements OnInit {
  answers: Answer[];

  constructor(private answerService: AnswerService) {}

  ngOnInit() {
    this.loadAnswers();
  }

  loadAnswers() {
    this.answerService.getAnswers().subscribe(
      (answers: Answer[]) => {
        this.answers = answers;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  createAnswer(answer: Answer) {
    this.answerService.createAnswer(answer).subscribe(
      (createdAnswer: Answer) => {
        // Handle success
        console.log('Answer created:', createdAnswer);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateAnswer(answer: Answer) {
    this.answerService.updateAnswer(answer).subscribe(
      (updatedAnswer: Answer) => {
        // Handle success
        console.log('Answer updated:', updatedAnswer);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteAnswer(id: number) {
    this.answerService.deleteAnswer(id).subscribe(
      () => {
        // Handle success
        console.log('Answer deleted:', id);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
