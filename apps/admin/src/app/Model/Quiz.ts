export class Quiz {
    id: number;
    name: string;
    //course: Course;
    questions: Question[];
  }

export class Question {
  id: number;
  description: string;
  quiz: Quiz;
  answers: Answer[];
 }

 export class Answer {
  id: number;
  description: string;
  correct: boolean;
  question: Question;
}

export class Course {
  id: number;
  name: string;
  description: string;
  pdfFileName: string;
  pdfFileContentType: string;
  pdfFileData: Blob;
  lessons: Lesson[];
}

export class Lesson {
  id: number;
  name: string;
  description: string;
  videoUrl: string;
  videoTitle: string;
  course: Course;
}

export class StudentTest {
  id: number;
  quiz: Quiz;
  //user: AppUser;
  chosenAnswers: Answer[];
  attemptTime: Date;
  attemptNumber: number;
  score: number;

}
