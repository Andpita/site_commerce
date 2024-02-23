import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCTS, URL_PRODUCTS_ID } from '../../../shared/constants/urls';
import { InsertProduct } from '../../../shared/dto/insertProduct';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { ConnectionAPIPost } from '../../../shared/functions/connections/connectAPI';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { useProductReducer } from '../../../store/reducers/productsReducer/useProductReducer';

export const useInsertProduct = (productId?: string) => {
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const { setNotification } = useGlobalReducer();
  const navigate = useNavigate();
  const { request } = useRequest();
  const { product: productReducer, setProduct: setProductReducer } = useProductReducer();
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
    console.log(productId);
    if (productId) {
      setProductReducer(undefined);
      request(URL_PRODUCTS_ID.replace('{id}', productId), MethodsEnum.GET, setProductReducer);
    }
  }, [productId]);

  useEffect(() => {
    if (product.name && product.image && product.categoryId && product.price > 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [product]);

  useEffect(() => {
    if (productReducer) {
      setProduct({
        name: productReducer.name,
        price: productReducer.price,
        image: productReducer.image,
        weight: productReducer.weight,
        width: productReducer.width,
        length: productReducer.length,
        height: productReducer.height,
        diameter: productReducer.diameter,
      });
    }
  }, [productReducer]);

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
