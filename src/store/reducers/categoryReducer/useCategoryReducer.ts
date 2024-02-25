import { useDispatch } from 'react-redux';

import { CategoryType } from '../../../shared/types/CategoryType';
import { useAppSelector } from '../../hooks';
import { setCategoriesAction, setCategoryAction } from '.';

export const useCategoryReducer = () => {
  const dispatch = useDispatch();

  const { categories, category } = useAppSelector((state) => state.categoryReducer);
  const setCategories = (categories: CategoryType[]) => {
    dispatch(setCategoriesAction(categories));
  };

  const setCategory = (category?: CategoryType) => {
    dispatch(setCategoryAction(category));
  };

  return {
    categories,
    setCategories,
    category,
    setCategory,
  };
};
