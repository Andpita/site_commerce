import { Descriptions, DescriptionsProps } from 'antd';
import { useParams } from 'react-router-dom';

import { DisplayFlexCenter } from '../../../shared/components/displays/display.styled';
import Loading from '../../../shared/components/loading/Loading';
import { Screen } from '../../../shared/components/screen/Screen';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useTicketById } from '../hooks/useTicketById';

export const TicketById = () => {
  const { id } = useParams();
  const { ticketById, loading } = useTicketById(id);

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'SUPORTE',
      navigateTo: RoutesEnum.USER_TICKET,
    },
    {
      name: 'DETALHES',
    },
  ];

  const user: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Ticket Id',
      children: ticketById?.id,
      span: 1,
    },
    {
      key: '2',
      label: 'Usuário Id',
      children: ticketById?.userId,
      span: 1,
    },
    {
      key: '3',
      label: 'Status',
      children: 'None',
      span: 1,
    },
    {
      key: '4',
      label: 'Nome',
      children: ticketById?.userName,
    },
    {
      key: '5',
      label: 'Email',
      children: ticketById?.userEmail,
      span: 2,
    },
    {
      key: '6',
      label: 'Mensagem',
      children: ticketById?.textmessage,
      span: 1,
      style: {},
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      {loading || !id ? (
        <>
          <DisplayFlexCenter>
            <Loading size="large" />
          </DisplayFlexCenter>
        </>
      ) : (
        <Descriptions title="Ticket" bordered items={user} />
      )}
    </Screen>
  );
};
