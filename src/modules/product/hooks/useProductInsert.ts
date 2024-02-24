import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCTS, URL_PRODUCTS_ID } from '../../../shared/constants/urls';
import { InsertProduct } from '../../../shared/dto/insertProduct';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useProductReducer } from '../../../store/reducers/productsReducer/useProductReducer';

const DEFAULT_PRODUCT: InsertProduct = {
  name: '',
  price: 0,
  image: '',
  weight: 0,
  height: 0,
  diameter: 0,
  width: 0,
  length: 0,
  active: 1,
};

export const useInsertProduct = (productId?: string) => {
  const [disableButton, setDisableButton] = useState(true);
  const navigate = useNavigate();
  const { request, loading: loadingRequest } = useRequest();
  const { product: productReducer, setProduct: setProductReducer } = useProductReducer();
  const [product, setProduct] = useState<InsertProduct>(DEFAULT_PRODUCT);
  const [loadingProduct, setLoadingProduct] = useState(false);

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
        categoryId: productReducer.category?.id,
      });
    }
  }, [productReducer]);

  useEffect(() => {
    if (product.name && product.image && product.categoryId && product.price > 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [product]);

  useEffect(() => {
    const findProduct = async (id: string) => {
      setLoadingProduct(true);
      await request(URL_PRODUCTS_ID.replace('{id}', `${id}`), MethodsEnum.GET, setProductReducer);
      setLoadingProduct(false);
    };

    if (productId) {
      findProduct(productId);
    } else {
      setProduct(DEFAULT_PRODUCT);
      setProductReducer(undefined);
    }
  }, [productId]);

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
    if (productId) {
      console.log(product);
      await request(
        URL_PRODUCTS_ID.replace('{id}', productId),
        MethodsEnum.PUT,
        undefined,
        product,
        'Produto alterado com sucesso!',
      );
      navigate(RoutesEnum.PRODUCT);
    } else {
      await request(
        URL_PRODUCTS,
        MethodsEnum.POST,
        undefined,
        product,
        'Produto criado com sucesso!',
      );
      navigate(RoutesEnum.PRODUCT);
    }
  };

  const handleClickcancel = () => {
    navigate(RoutesEnum.PRODUCT);
  };

  return {
    disableButton,
    handleClickcancel,
    handleSubmit,
    handleChange,
    handleChangeSelect,
    product,
    loadingRequest,
    loadingProduct,
  };
};
