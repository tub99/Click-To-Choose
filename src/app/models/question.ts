import { Option } from './option';

export class Question {
  id: number;
  qName: string;
  questionTypeId: number;
  options: Option[];
  answered: boolean;
  qUnderlined: string;
  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.qName = data.name|| '';
    this.questionTypeId = data.questionTypeId;
    this.options = [];
    data.options.forEach(o => {
      this.options.push(new Option(o));
    });
  }
}
