import { useDispatch } from 'react-redux';

import { CategoryType } from '../../../shared/types/CategoryType';
import { useAppSelector } from '../../hooks';
import { setCategoriesAction } from '.';

export const useCategoryReducer = () => {
  const dispatch = useDispatch();

  const { categories } = useAppSelector((state) => state.categoryReducer);
  const setCategories = (categories: CategoryType[]) => {
    dispatch(setCategoriesAction(categories));
  };

  return {
    categories,
    setCategories,
  };
};
