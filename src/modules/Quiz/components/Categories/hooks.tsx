import { useEffect, useState } from 'react';

import baseApi from '@/core/services/baseApi';

import { ICategory } from '@/interfaces/quiz';

import { useStore } from '@/store';

export const useCategories = () => {
  const { quizStore } = useStore();
  const [categories, setCategories] = useState<ICategory[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chosenCategoryId, setChosenCategoryId] = useState<number>();

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      const res = await baseApi.getCategories(20);
      const categoriesWithMoreThan10Clues = res.filter(({ clues_count }) => clues_count >= 10);
      setCategories(categoriesWithMoreThan10Clues);
      setIsLoading(false);
    };

    getCategories();
  }, []);

  const onCategorySave = async () => {
    if (chosenCategoryId) {
      setIsLoading(true);
      const res = await baseApi.getCategory(chosenCategoryId);

      quizStore.setClues(res.clues);
      setIsLoading(false);
    }
  };

  const onCategoryChange = (id: number) => {
    setChosenCategoryId(id);
  };

  return {
    categories,
    isLoading,
    onCategoryChange,
    onCategorySave,
    chosenCategoryId,
  };
};
