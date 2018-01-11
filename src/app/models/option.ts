export class Option {
    id: number;
    questionId: number;
    optName: string;
    selected: boolean;
    isCorrect: boolean;
    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.optName = data.name;
        this.isCorrect = data.isCorrect;
        this.selected = false;
    }
}
