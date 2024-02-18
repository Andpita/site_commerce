import { useEffect, useState } from 'react';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/UseDataContext';
import { useRequest } from '../../../shared/hooks/useRequest';

export const useCategory = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequest();
  const [categoriesFiltered, setCategoriesFiltered] = useState(categories);

  useEffect(() => {
    if (!categories || categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  useEffect(() => {
    setCategoriesFiltered([...categories]);
  }, [categories]);

  const handleSearchCategory = (value: string) => {
    if (!value) {
      setCategoriesFiltered([...categories]);
    } else {
      setCategoriesFiltered([
        ...categoriesFiltered.filter((category) => {
          return category.name.toUpperCase().includes(value.toUpperCase());
        }),
      ]);
    }
  };

  return {
    categories: categoriesFiltered,
    handleSearchCategory,
  };
};
