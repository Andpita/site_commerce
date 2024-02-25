import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY, URL_CATEGORY_ID } from '../../../shared/constants/urls';
import { InsertCategory } from '../../../shared/dto/insertCategory';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';

export const useCategoryInsert = (categoryId?: string) => {
  const [disableButton, setDisableButton] = useState(true);

  const navigate = useNavigate();
  const [category, setCategory] = useState<InsertCategory>({
    name: '',
  });
  const [loadingCategory, setLoadingCategory] = useState(false);
  const { category: categoryReducer, setCategory: setCategoryReducer } = useCategoryReducer();
  const { request } = useRequest();

  useEffect(() => {
    if (categoryReducer) {
      setCategory({
        name: categoryReducer.name,
      });
    }
  }, [categoryReducer]);

  useEffect(() => {
    if (category.name !== '') {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [category]);

  useEffect(() => {
    const findProduct = async (id: string) => {
      setLoadingCategory(true);
      await request(URL_CATEGORY_ID.replace('{id}', `${id}`), MethodsEnum.GET, setCategoryReducer);
      setLoadingCategory(false);
    };

    if (categoryId) {
      findProduct(categoryId);
    } else {
      setCategory({ name: '' });
      setCategoryReducer(undefined);
    }
  }, [categoryId]);

  const handleClickcancel = () => {
    navigate(RoutesEnum.CATEGORY);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, object: string) => {
    setCategory({
      ...category,
      [object]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    if (categoryId) {
      await request(
        URL_CATEGORY_ID.replace('{id}', `${categoryId}`),
        MethodsEnum.PUT,
        undefined,
        category,
        'Categoria editada com sucesso!',
      );
      navigate(RoutesEnum.CATEGORY);
    } else {
      await request(
        URL_CATEGORY,
        MethodsEnum.POST,
        undefined,
        category,
        'Categoria criada com sucesso!',
      );
      navigate(RoutesEnum.CATEGORY);
    }
  };

  return {
    disableButton,
    category,
    handleClickcancel,
    handleChange,
    handleSubmit,
    loadingCategory,
  };
};
