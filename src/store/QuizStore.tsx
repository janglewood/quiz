import { makeAutoObservable, observable } from 'mobx';

import { IClue, IQuiz } from '@/interfaces/quiz';
import { IUser } from '@/interfaces/user';

export class QuizStore implements IQuiz {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  stage = 0;
  clues = [] as IClue[];
  record = 0;

  setStage = (stage: IQuiz['stage']) => {
    this.stage = stage;
  };

  setClues = (clues: IClue[]) => {
    const formattedClues = clues.slice(0, 10).sort((a, b) => (a.value < b.value ? -1 : 1));

    this.clues = formattedClues;
  };

  get currentQuestion() {
    return this.clues[this.stage];
  }

  get isGameStarted() {
    return !!this.clues.length;
  }

  applyAnswer = (userAnswer: IClue['userAnswer']) => {
    this.clues[this.stage].userAnswer = userAnswer;
    if (this.stage < 9) {
      this.stage++;
    }
  };

  setRecord = (name: IUser['name']) => {
    const record = this.clues.reduce((acc, { value, userAnswer, answer }) => {
      if (answer === userAnswer) {
        return acc + value;
      } else {
        return acc;
      }
    }, 0);

    this.record = record;
    const user_stats = JSON.parse(localStorage.getItem('user_stats') || '{}');

    localStorage.setItem(
      'user_stats',
      JSON.stringify({
        ...user_stats,
        [name]: Number(user_stats[name]) >= record ? user_stats[name] : record,
      }),
    );
  };

  reset = () => {
    this.stage = 0;
    this.clues = [];
    this.record = 0;
  };
}
