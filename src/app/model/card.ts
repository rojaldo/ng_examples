export class Card {

    question = '';
    rightAnswer = '';
    answers: string[] = [];
    responded = false;
    correct!: boolean;
    answer = '';

    constructor(json: any) {
        this.question = json.question;
        this.rightAnswer = json.correct_answer;
        this.answers = json.incorrect_answers;
        this.answers.push(this.rightAnswer);
    }
}