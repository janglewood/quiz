export interface IQuiz {
  stage: number;
  clues: IClue[];
  record: number;
}

export interface ICategory {
  id: number;
  title: string;
  clues_count: number;
}

export interface IClue {
  airdate: string;
  answer: string;
  category_id: number;
  game_id: number;
  id: number;
  invalid_count: unknown;
  question: string;
  value: number;
  userAnswer?: string;
}

export interface ICategoryResponse {
  clues: IClue[];
  clues_count: number;
  id: number;
  title: string;
}
