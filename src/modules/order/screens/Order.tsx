import { TableProps } from 'antd';
import Search from 'antd/es/input/Search';
import { useNavigate } from 'react-router-dom';

import { BoxButton } from '../../../shared/components/box/box.styled';
import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { dataModify, hourModify } from '../../../shared/functions/dateFunctions';
import { OrderType } from '../../../shared/types/OrderType';
import { useOrder } from '../hooks/useOrders';

const columns: TableProps<OrderType>['columns'] = [
  {
    title: 'Id_Pedido',
    dataIndex: 'orderId',
    key: 'orderId',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Hora',
    dataIndex: 'date',
    key: 'date',
    render: (_, target) => <a>{hourModify(target?.date)}</a>,
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
    render: (_, target) => <a>{dataModify(target?.date)} </a>,
  },
  {
    title: 'Usuário',
    dataIndex: 'user',
    key: 'user.id',
    render: (_, target) => <a>{target?.user?.name}</a>,
  },
  {
    title: 'Qtd. Produtos',
    dataIndex: 'amountProducts',
    key: 'amountProducts',
    render: (text) => <a>{text}</a>,
  },
];

export const Order = () => {
  const { orders } = useOrder();
  const navigate = useNavigate();

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'PEDIDOS',
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <BoxButton>
        <LimitedContainer width={320}>
          <Search
            disabled
            placeholder="Buscar comprador..."
            onSearch={() => alert('disabled')}
            enterButton
          />
        </LimitedContainer>
        <LimitedContainer width={160}>
          <Button disabled type="primary" onClick={() => alert('disabled')}>
            Inserir
          </Button>
        </LimitedContainer>
      </BoxButton>
      <Table
        onRow={(record) => ({
          onClick: () => navigate(`${RoutesEnum.ORDER}/${record.orderId}`),
        })}
        columns={columns}
        dataSource={orders}
        rowKey={'orderId'}
      />
    </Screen>
  );
};
