import { useEffect } from 'react';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/UseDataContext';
import { useRequest } from '../../../shared/hooks/useRequest';
import { CategoryType } from '../../product/types/CategoryType';

export const useCategory = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequest();

  useEffect(() => {
    request<CategoryType[]>(URL_CATEGORY, MethodsEnum.GET, setCategories);
  }, []);

  return {
    categories,
  };
};
