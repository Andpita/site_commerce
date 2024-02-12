import { TableProps } from 'antd';
import Search from 'antd/es/input/Search';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/components/buttons/Button';
import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { URL_PRODUCTS } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { convertMoney } from '../../../shared/functions/money';
import { useDataContext } from '../../../shared/hooks/UseDataContext';
import { useRequest } from '../../../shared/hooks/useRequest';
import { CategoryColumn } from '../components/CategoryColumn';
import { TooltipImage } from '../components/TooltipImage';
import { BoxButton, LimitSizeButton, LimitSizeButtonSearch } from '../styles/product.style';
import { ProductType } from '../types/ProductType';

const columns: TableProps<ProductType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (_, product) => <TooltipImage product={product} />,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',

    render: (_, product) => <a>{convertMoney(product.price)}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    render: (_, product) => <CategoryColumn category={product.category} />,
  },
];

export const Product = () => {
  const { request } = useRequest();
  const navigate = useNavigate();
  const { products, setProducts } = useDataContext();
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

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'PRODUTOS',
    },
  ];

  const onSearch = (value: string) => {
    if (!value) {
      setProductsFiltered([...products]);
    } else {
      setProductsFiltered([
        ...productsFiltered.filter((product) => {
          return product.name.includes(value);
        }),
      ]);
    }
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <BoxButton>
        <LimitSizeButtonSearch>
          <Search placeholder="Buscar Produto..." onSearch={onSearch} enterButton />
        </LimitSizeButtonSearch>
        <LimitSizeButton>
          <Button type="primary" onClick={handleOnClick}>
            Inserir
          </Button>
        </LimitSizeButton>
      </BoxButton>

      <Table columns={columns} dataSource={productsFiltered} rowKey="" />
    </Screen>
  );
};
