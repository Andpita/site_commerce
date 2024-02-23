import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCTS } from '../../../shared/constants/urls';
import { InsertProduct } from '../../../shared/dto/insertProduct';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { ConnectionAPIPost } from '../../../shared/functions/connections/connectAPI';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';

export const useInsertProduct = () => {
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const { setNotification } = useGlobalReducer();
  const navigate = useNavigate();
  const [product, setProduct] = useState<InsertProduct>({
    name: '',
    price: 0,
    image: '',
    weight: 0,
    height: 0,
    diameter: 0,
    width: 0,
    length: 0,
    active: 1,
  });

  useEffect(() => {
    if (product.name && product.image && product.categoryId && product.price > 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [product]);

  const handleChangeSelect = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string,
    price?: boolean,
  ) => {
    setProduct({
      ...product,
      [key]: price ? Number(event.target.value) : event.target.value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    await ConnectionAPIPost(URL_PRODUCTS, product)
      .then(() => {
        setNotification('success', 'Sucesso!', 'Produto adicionado com sucesso!');
        navigate(RoutesEnum.PRODUCT);
      })
      .catch((e: Error) => {
        setNotification('error', e.message);
        navigate(RoutesEnum.PRODUCT);
      })
      .finally(() => setLoading(false));
  };

  const handleClickcancel = () => {
    navigate(RoutesEnum.PRODUCT);
  };

  return {
    loading,
    disableButton,
    handleClickcancel,
    handleSubmit,
    handleChange,
    handleChangeSelect,
    product,
  };
};
