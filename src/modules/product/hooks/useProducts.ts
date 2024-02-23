import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCTS, URL_PRODUCTS_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { ProductType } from '../../../shared/types/ProductType';
import { useProductReducer } from '../../../store/reducers/productsReducer/useProductReducer';

export const useProducts = () => {
  const { request } = useRequest();
  const navigate = useNavigate();

  const { products, setProducts } = useProductReducer();

  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>([]);

  useEffect(() => {
    setProductsFiltered([...products]);
  }, [products]);

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCTS, MethodsEnum.GET, setProducts);
  }, []);

  const handleOnClick = () => {
    navigate(RoutesEnum.PRODUCT_INSERT);
  };

  const onSearch = (value: string) => {
    if (!value) {
      setProductsFiltered([...products]);
    } else {
      setProductsFiltered([
        ...products.filter((product: ProductType) => {
          return product.name.toUpperCase().includes(value.toUpperCase());
        }),
      ]);
    }
  };

  const handleDeleteProduct = async (productId: number) => {
    await request(URL_PRODUCTS_ID.replace('{id}', `${productId}`), MethodsEnum.DELETE);
    console.log(productId);
    await request<ProductType[]>(URL_PRODUCTS, MethodsEnum.GET, setProducts);
    return null;
  };

  const handleEditProduct = (productId: number) => {
    console.log(productId);
    return null;
  };

  return {
    onSearch,
    handleOnClick,
    productsFiltered,
    handleDeleteProduct,
    handleEditProduct,
  };
};
