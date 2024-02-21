import { Badge, Descriptions, DescriptionsProps, Divider } from 'antd';
import { useParams } from 'react-router-dom';

import { DisplayFlexCenter } from '../../../shared/components/displays/display.styled';
import Loading from '../../../shared/components/loading/Loading';
import { Screen } from '../../../shared/components/screen/Screen';
import ListOrderProduct from '../../../shared/components/table/listProducts';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { dataModify, hourModify } from '../../../shared/functions/dateFunctions';
import { useOrderDatails } from '../hooks/useOrderDatail';

export const OrderDetail = () => {
  const { orderId } = useParams();
  const { orderById, loading } = useOrderDatails(orderId);

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

  const user: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Nome',
      children: orderById?.user?.name,
      span: 2,
    },
    {
      key: '2',
      label: 'CPF',
      children: orderById?.user?.cpf,
      span: 1,
    },
    {
      key: '3',
      label: 'E-mail',
      children: orderById?.user?.email,
      span: 2,
    },
    {
      key: '4',
      label: 'Telefone',
      children: orderById?.user?.phone,
    },
    {
      key: '5',
      label: 'Cidade',
      children: orderById?.address?.city?.name,
      span: 2,
    },
    {
      key: '6',
      label: 'Estado',
      children: orderById?.address?.city?.state?.name,
    },
    {
      key: '7',
      label: 'CEP',
      children: orderById?.address?.cep,
    },
    {
      key: '8',
      label: 'Número',
      children: orderById?.address?.numberAddress,
    },
    {
      key: '9',
      label: 'Complemento',
      children: orderById?.address?.complement,
    },
  ];

  const payment: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Data',
      children: orderById ? dataModify(orderById?.date) : '0',
      span: 1,
    },
    {
      key: '2',
      label: 'Data',
      children: orderById ? hourModify(orderById?.date) : '0',
      span: 2,
    },
    {
      key: '3',
      label: 'ID Pagamento',
      children: orderById?.payment?.id,
    },
    {
      key: '4',
      label: 'Tipo de Pagamento',
      children: orderById?.payment?.type,
      span: 2,
    },
    {
      key: '5',
      label: 'Status',
      children: (
        <Badge
          status={orderById?.payment?.paymentStatus.id === 1 ? 'success' : 'processing'}
          text={orderById?.payment?.paymentStatus.status}
        />
      ),
      span: 3,
    },
    {
      key: '6',
      label: 'Preço',
      children: `R$ ${orderById?.payment?.price.toFixed(2)}`,
    },
    {
      key: '7',
      label: 'Desconto',
      children: `R$ ${orderById?.payment?.discount.toFixed(2)}`,
    },
    {
      key: '8',
      label: 'Preço Final',
      children: `R$ ${orderById?.payment?.finalPrice.toFixed(2)}`,
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      {!orderById || loading ? (
        <>
          <DisplayFlexCenter>
            <Loading size="large" />
          </DisplayFlexCenter>
        </>
      ) : (
        <>
          <Descriptions title="Detalhes Usuário" bordered items={user} />;
          <Divider />
          <Descriptions title="Detalhes Pagamento" bordered items={payment} />;
          <Divider />
          <ListOrderProduct ordersProduct={orderById.orderProduct} />
        </>
      )}
    </Screen>
  );
};
