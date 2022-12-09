import { IQuiz } from '@/interfaces/quiz';
import { IUser } from '@/interfaces/user';

export type TableData = IUser & Pick<IQuiz, 'record'> & { key: string };
