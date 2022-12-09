import { createContext, Provider, useContext } from 'react';

import { QuizStore } from './QuizStore';
import { UserStore } from './UserStore';

interface IRootStore {
  quizStore: QuizStore;
  userStore: UserStore;
}

// Common Store Provider
export class RootStore implements IRootStore {
  quizStore: QuizStore;
  userStore: UserStore;
  constructor() {
    this.quizStore = new QuizStore();
    this.userStore = new UserStore();
  }
}

export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);
export const StoreProvider: Provider<RootStore> = StoreContext.Provider;

// Hooks
export const useStore = () => useContext(StoreContext);
