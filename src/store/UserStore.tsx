import { makeAutoObservable, observable } from 'mobx';

import { IUser } from '@/interfaces/user';

export class UserStore implements IUser {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  name = '';

  setName = (name: string): void => {
    this.name = name;
  };
}
