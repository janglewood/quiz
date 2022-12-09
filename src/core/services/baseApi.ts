import apiService from './apiService';

import { ICategory, ICategoryResponse } from '@/interfaces/quiz';

interface IBaseAPI {
  handleError: (err: Error) => void;
  getCategories: (count: number) => Promise<ICategory[]>;
  getCategory: (id: number) => Promise<ICategoryResponse>;
}
const baseApi: IBaseAPI = {
  handleError: function (err) {
    console.log('%c%s', 'color: red; background: gray; font-size: 24px;', `ERROR: ${err.message}`);
  },

  getCategories: async function (count = 10) {
    try {
      const res = await apiService.get(
        `${process.env.REACT_APP_BASE_URL}categories/?count=${count}`,
      );
      return res.data;
    } catch (err) {
      return this.handleError(err as Error);
    }
  },

  getCategory: async function (id) {
    try {
      const res = await apiService.get(`${process.env.REACT_APP_BASE_URL}category/?id=${id}`);
      return res.data;
    } catch (err) {
      return this.handleError(err as Error);
    }
  },
};

export default baseApi;
