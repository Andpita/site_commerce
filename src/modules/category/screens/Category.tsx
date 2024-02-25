import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Modal, TableProps } from 'antd';
import Search from 'antd/es/input/Search';
import { useMemo } from 'react';

import { BoxButton } from '../../../shared/components/box/box.styled';
import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { DisplayFlexCenter } from '../../../shared/components/displays/display.styled';
import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { useModal } from '../../../shared/hooks/useModal';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../hooks/useCategory';

export const Category = () => {
  const {
    categories,
    handleSearchCategory,
    handleCategoryInsert,
    handleDeleteCategory,
    handleEditCategory,
  } = useCategory();

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'CATEGORIAS',
    },
  ];

  const columns: TableProps<CategoryType>['columns'] = useMemo(
    () => [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        width: 100,
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
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        width: 200,
        render: (_, category) => (
          <DisplayFlexCenter>
            <Button
              marginLeft="20px"
              onClick={() => handleEditCategory(category.id)}
              type="primary"
              icon={<EditOutlined />}
              style={{ fontSize: '10px', maxWidth: '80px', margin: '5px' }}
            >
              Editar
            </Button>
            <Button
              marginLeft="20px"
              disabled={category.amountProducts ? true : false}
              onClick={() => showModal(category.id)}
              danger
              type="primary"
              icon={<DeleteOutlined />}
              style={{ fontSize: '10px', maxWidth: '80px', margin: '5px' }}
            >
              Apagar
            </Button>
          </DisplayFlexCenter>
        ),
      },
    ],
    [],
  );

  const { isModalOpen, handleCancel, showModal, id: idCategory } = useModal();

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <Modal
        title="Atenção"
        open={isModalOpen}
        onOk={() => {
          handleDeleteCategory(idCategory);
          handleCancel();
        }}
        onCancel={handleCancel}
      >
        <p>Tem certeza que deseja excluir o produto?</p>
      </Modal>

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
