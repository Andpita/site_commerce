import { TableProps } from 'antd';
import { useEffect } from 'react';

import Table from '../../../shared/components/table/Table';
import { URL_PRODUCTS } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/UseDataContext';
import { useRequest } from '../../../shared/hooks/useRequest';
import { ProductType } from '../types/productType';

const columns: TableProps<ProductType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    render: (text) => <a>{text}</a>,
  },
];

export const Product = () => {
  const { request } = useRequest();

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCTS, MethodsEnum.GET, setProducts);
  }, []);

  const { products, setProducts } = useDataContext();
  return <Table columns={columns} dataSource={products} />;
};
