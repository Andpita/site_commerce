import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY, URL_CATEGORY_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';

export const useCategory = () => {
  const { categories, setCategories } = useCategoryReducer();
  const { request } = useRequest();
  const [categoriesFiltered, setCategoriesFiltered] = useState(categories);
  const navigate = useNavigate();

  useEffect(() => {
    request(URL_CATEGORY, MethodsEnum.GET, setCategories);
  }, []);

  useEffect(() => {
    setCategoriesFiltered([...categories]);
  }, [categories]);

  const handleSearchCategory = (value: string) => {
    if (!value) {
      setCategoriesFiltered([...categories]);
    } else {
      setCategoriesFiltered([
        ...categories.filter((category) => {
          return category.name.toUpperCase().includes(value.toUpperCase());
        }),
      ]);
    }
  };

  const handleCategoryInsert = () => {
    navigate(RoutesEnum.CATEGORY_INSERT);
  };

  const handleEditCategory = (categoryId: number) => {
    const id = categoryId.toString();

    navigate(RoutesEnum.CATEGORY_ID.replace(':id', id));
  };

  const handleDeleteCategory = async (categoryId: number) => {
    await request(
      URL_CATEGORY_ID.replace('{id}', `${categoryId}`),
      MethodsEnum.DELETE,
      undefined,
      undefined,
      'Categoria deleteda com sucesso!',
    );
    await request<CategoryType[]>(URL_CATEGORY, MethodsEnum.GET, setCategories);
    return null;
  };

  return {
    categories: categoriesFiltered,
    handleSearchCategory,
    handleCategoryInsert,
    handleEditCategory,
    handleDeleteCategory,
  };
};
