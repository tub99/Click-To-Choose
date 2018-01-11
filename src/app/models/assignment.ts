import { Question } from './question';
export class Assignment {
  id: number;
  name: string;
  description: string;
  questions: Question[];
  type: String;
  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.questions = [];
      this.type =data.type;
      data.questions.forEach(q => {
        this.questions.push(new Question(q));
      });
    }
  }
}
