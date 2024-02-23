import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { TableProps } from 'antd';
import Search from 'antd/es/input/Search';
import { useMemo } from 'react';

import { BoxButton } from '../../../shared/components/box/box.styled';
import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { convertMoney } from '../../../shared/functions/money';
import { ProductType } from '../../../shared/types/ProductType';
import { CategoryColumn } from '../components/CategoryColumn';
import { TooltipImage } from '../components/TooltipImage';
import { useProducts } from '../hooks/useProducts';

export const Product = () => {
  const { handleOnClick, onSearch, productsFiltered, handleDeleteProduct, handleEditProduct } =
    useProducts();

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'PRODUTOS',
    },
  ];

  const columns: TableProps<ProductType>['columns'] = useMemo(
    () => [
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
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (_, product) => (
          <>
            <Button
              width="50px"
              marginLeft="20px"
              onClick={() => handleEditProduct(product.id)}
              type="primary"
            >
              <EditOutlined />
            </Button>
            <Button
              width="50px"
              marginLeft="20px"
              onClick={() => handleDeleteProduct(product.id)}
              danger
              type="primary"
            >
              <DeleteOutlined />
            </Button>
          </>
        ),
      },
    ],
    [],
  );

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <BoxButton>
        <LimitedContainer width={320}>
          <Search placeholder="Buscar Produto..." onSearch={onSearch} enterButton />
        </LimitedContainer>
        <LimitedContainer width={160}>
          <Button type="primary" onClick={handleOnClick}>
            Inserir
          </Button>
        </LimitedContainer>
      </BoxButton>

      <Table columns={columns} dataSource={productsFiltered} rowKey={'id'} />
    </Screen>
  );
};
