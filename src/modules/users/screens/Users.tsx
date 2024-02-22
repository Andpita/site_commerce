import { Button, TableProps } from 'antd';
import Search from 'antd/es/input/Search';

import { BoxButton } from '../../../shared/components/box/box.styled';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { DisplayFlexCenter } from '../../../shared/components/displays/display.styled';
import Loading from '../../../shared/components/loading/Loading';
import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { cpfMask } from '../../../shared/functions/cpfMask';
import { phoneMask } from '../../../shared/functions/phoneMask';
import { UserType } from '../../../shared/types/UserType';
import { useUsers } from '../hooks/useUsers';

const columns: TableProps<UserType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (_, user) => <a>{user.id}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (_, user) => <a>{user.name}</a>,
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
    render: (_, user) => <a>{user.email}</a>,
  },
  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
    render: (_, user) => <a>{phoneMask(user.phone)}</a>,
  },
  {
    title: 'CPF',
    dataIndex: 'cpf',
    key: 'cpf',
    render: (_, user) => <a>{cpfMask(user.cpf)}</a>,
  },
];

export const Users = () => {
  const { users, loading, onSearch } = useUsers();

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'USUÁRIOS',
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <BoxButton>
        <LimitedContainer width={320}>
          <Search placeholder="Buscar usuário..." onSearch={onSearch} enterButton />
        </LimitedContainer>
        <LimitedContainer width={160}>
          <Button type="primary" onClick={() => alert('disabled')}>
            Inserir
          </Button>
        </LimitedContainer>
      </BoxButton>
      {!users || loading ? (
        <>
          <DisplayFlexCenter>
            <Loading size="large" />
          </DisplayFlexCenter>
        </>
      ) : (
        <>
          <Table columns={columns} dataSource={users} rowKey={'id'} />
        </>
      )}
    </Screen>
  );
};
