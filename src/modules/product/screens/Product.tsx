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
import { convertMoney } from '../../../shared/functions/money';
import { useModal } from '../../../shared/hooks/useModal';
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
        width: 100,
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
        width: 200,
        render: (_, product) => <CategoryColumn category={product.category} />,
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        width: 200,
        render: (_, product) => (
          <DisplayFlexCenter>
            <Button
              marginLeft="20px"
              onClick={() => handleEditProduct(product.id)}
              type="primary"
              icon={<EditOutlined />}
              style={{ fontSize: '10px', maxWidth: '80px', margin: '5px' }}
            >
              Editar
            </Button>
            <Button
              marginLeft="20px"
              onClick={() => showModal(product.id)}
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

  const { isModalOpen, handleCancel, showModal, id: idDelete } = useModal();

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <Modal
        title="Atenção"
        open={isModalOpen}
        onOk={() => {
          handleDeleteProduct(idDelete);
        }}
        onCancel={handleCancel}
      >
        <p>Tem certeza que deseja excluir o produto?</p>
      </Modal>
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
