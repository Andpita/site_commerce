import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { InsertCategory } from '../../../shared/dto/insertCategory';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { ConnectionAPIPost } from '../../../shared/functions/connections/connectAPI';
import { useGlobalContext } from '../../../shared/hooks/UseGlobalContext';

export const useCategoryInsert = () => {
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const { setNotification } = useGlobalContext();
  const navigate = useNavigate();
  const [category, setCategory] = useState<InsertCategory>({
    name: '',
  });

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
    console.log(category);
    const teste = await ConnectionAPIPost(URL_CATEGORY, category)
      .then(() => {
        setNotification('success', 'Sucesso!', 'Categoria adicionada com sucesso!');
        navigate(RoutesEnum.CATEGORY);
      })
      .catch((e: Error) => {
        setNotification('error', e.message);
        navigate(RoutesEnum.CATEGORY);
      })
      .finally(() => {
        console.log(teste);
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
