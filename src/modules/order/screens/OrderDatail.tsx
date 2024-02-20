import { Badge, Descriptions, DescriptionsProps, Divider } from 'antd';
import { useParams } from 'react-router-dom';

import { Screen } from '../../../shared/components/screen/Screen';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useOrderDatails } from '../hooks/useOrderDatail';

const user: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Nome',
    children: 'Anderson de Lima Silva Nelson Trabsom',
    span: 2,
  },
  {
    key: '2',
    label: 'CPF',
    children: '123123123-12',
    span: 1,
  },
  {
    key: '3',
    label: 'E-mail',
    children: 'andisudelimasilvanelsontrabsom2@gmail.com',
    span: 2,
  },
  {
    key: '4',
    label: 'Telefone',
    children: '38 999002032',
  },
  {
    key: '5',
    label: 'Cidade',
    children: 'Belém de Maria',
    span: 2,
  },
  {
    key: '6',
    label: 'Estado',
    children: 'Rio Grande no Norte',
  },
  {
    key: '7',
    label: 'CEP',
    children: '88021-000',
  },
  {
    key: '8',
    label: 'Número',
    children: 112,
  },
  {
    key: '9',
    label: 'Complemento',
    children: 'Casa',
  },
];

const payment: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'ID Pagamento',
    children: '123',
  },
  {
    key: '2',
    label: 'Tipo de Pagamento',
    children: 'PaymentPix',
    span: 2,
  },
  {
    key: '3',
    label: 'Status',
    children: <Badge status="success" text="OK" />,
    span: 3,
  },
  {
    key: '4',
    label: 'Preço',
    children: '$80.00',
  },
  {
    key: '5',
    label: 'Desconto',
    children: '$10.00',
  },
  {
    key: '6',
    label: 'Preço Final',
    children: '$70.00',
  },
];

const produtos: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Produto_ID',
    children: '1',
  },
  {
    key: '2',
    label: 'Produto',
    children: 'Camisa Ciçoca',
    span: 2,
  },
  {
    key: '3',
    label: 'Qtd. Item',
    children: 2,
  },
  {
    key: '4',
    label: 'Preço Unitário',
    children: '$10.00',
  },
  {
    key: '5',
    label: 'Preço Total',
    children: '$20.00',
  },
];

export const OrderDetail = () => {
  const { orderId } = useParams();
  const { orderById } = useOrderDatails(orderId);

  console.log(orderById);

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'PEDIDOS',
      navigateTo: RoutesEnum.ORDER,
    },
    {
      name: 'DETALHES',
    },
  ];
  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <Descriptions title="Detalhes Usuário" bordered items={user} />;
      <Divider />
      <Descriptions title="Detalhes Pagamento" bordered items={payment} />;
      <Divider />
      <Descriptions title="Detalhes Produtos" bordered items={produtos} />;
    </Screen>
  );
};
