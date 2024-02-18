import { TableProps } from 'antd';
import Search from 'antd/es/input/Search';
import { useNavigate } from 'react-router-dom';

import { BoxButton } from '../../../shared/components/box/box.styled';
import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { CategoryType } from '../../product/types/CategoryType';
import { useCategory } from '../hooks/useCategory';

const columns: TableProps<CategoryType>['columns'] = [
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
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Produtos',
    dataIndex: 'amountProducts',
    key: 'amountProducts',
    render: (text) => <a>{text}</a>,
  },
];

export const Category = () => {
  const { categories, handleSearchCategory } = useCategory();
  const navigate = useNavigate();

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'CATEGORIAS',
    },
  ];

  const handleCategoryInsert = () => {
    navigate(RoutesEnum.CATEGORY_INSERT);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <BoxButton>
        <LimitedContainer width={320}>
          <Search placeholder="Buscar Categoria..." onSearch={handleSearchCategory} enterButton />
        </LimitedContainer>
        <LimitedContainer width={160}>
          <Button type="primary" onClick={handleCategoryInsert}>
            Inserir
          </Button>
        </LimitedContainer>
      </BoxButton>

      <Table columns={columns} dataSource={categories} rowKey={'id'} />
    </Screen>
  );
};
