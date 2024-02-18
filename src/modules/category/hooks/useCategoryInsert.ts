import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { InsertCategory } from '../../../shared/dto/insertCategory';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { ConnectionAPIPost } from '../../../shared/functions/connections/connectAPI';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';

export const useCategoryInsert = () => {
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const { setNotification } = useGlobalReducer();
  const navigate = useNavigate();
  const [category, setCategory] = useState<InsertCategory>({
    name: '',
  });
  const { request } = useRequest();
  const { setCategories } = useCategoryReducer();

  useEffect(() => {
    if (category.name !== '') {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [category]);

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
    setLoading(true);

    await ConnectionAPIPost(URL_CATEGORY, category)
      .then(() => {
        setNotification('success', 'Sucesso!', 'Categoria adicionada com sucesso!');
        navigate(RoutesEnum.CATEGORY);
      })
      .catch((e: Error) => {
        setNotification('error', e.message);
        navigate(RoutesEnum.CATEGORY);
      })
      .finally(async () => {
        await request(URL_CATEGORY, MethodsEnum.GET, setCategories);
        setLoading(false);
      });
  };

  return {
    loading,
    disableButton,
    category,
    handleClickcancel,
    handleChange,
    handleSubmit,
  };
};
