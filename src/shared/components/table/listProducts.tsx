import { ColumnsType } from 'antd/es/table';

import { convertMoney } from '../../functions/money';
import { OrderProductType } from '../../types/OrderProductType';
import Table from './Table';

const columns: ColumnsType<OrderProductType> = [
  {
    title: 'Produto ID',
    dataIndex: 'productId',
    key: 'productId',
    render: (_, target) => <a>{target.product?.id}</a>,
  },
  {
    title: 'Nome Produto',
    dataIndex: 'name',
    key: 'name',
    render: (_, target) => <a>{target.product?.name}</a>,
  },
  {
    title: 'Quantidade',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    render: (text) => <a>{convertMoney(text)}</a>,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: (_, target) => <a>{convertMoney(target.price * target.amount)}</a>,
  },
];

interface ListOrderProductProps {
  ordersProduct?: OrderProductType[];
}

const ListOrderProduct = ({ ordersProduct }: ListOrderProductProps) => {
  if (!ordersProduct || ordersProduct.length <= 0) {
    return null;
  }

  return <Table columns={columns} dataSource={ordersProduct} rowKey={'productId'} />;
};

export default ListOrderProduct;
