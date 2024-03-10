import { TableProps } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { TicketType } from '../../../shared/types/TicketType';
import { useTickets } from '../hooks/useTickets';

const columns: TableProps<TicketType>['columns'] = [
  {
    title: 'Ticket',
    dataIndex: 'id',
    key: 'id',
    width: 100,
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Usuário',
    dataIndex: 'userId',
    key: 'userId',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'userName',
    key: 'userName',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'userEmail',
    key: 'userEmail',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Data',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (_, target) => <a>{target.createdAt.slice(0, 10)} </a>,
  },
  {
    title: 'Hora',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (_, target) => <a>{target.createdAt.slice(11, 19)} </a>,
  },
];

export const Ticket = () => {
  const { tickets } = useTickets();
  const navigate = useNavigate();

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'SUPORTE',
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <Table
        onRow={(record) => ({
          onClick: () => navigate(`${RoutesEnum.USER_TICKET}/${record.id}`),
        })}
        columns={columns}
        dataSource={tickets}
        rowKey={'id'}
      />
    </Screen>
  );
};
