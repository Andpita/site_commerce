import { TableProps } from 'antd';
import Search from 'antd/es/input/Search';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { BoxButton } from '../../../shared/components/box/box.styled';
import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { DisplayFlexCenter } from '../../../shared/components/displays/display.styled';
import Loading from '../../../shared/components/loading/Loading';
import { Screen } from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { checkAdm } from '../../../shared/functions/connections/auth';
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
  {
    title: 'Tipo de Usuário',
    dataIndex: 'typeUser',
    key: 'typeUser',
    render: (_, user) => (
      <a>{user.typeUser === 1 ? 'Usuário' : user.typeUser === 2 ? 'Root' : 'Administrador'}</a>
    ),
  },
];

export const Users = () => {
  const { users, loading, onSearch } = useUsers();
  const userToken = useMemo(() => checkAdm(), []);
  const navigate = useNavigate();

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
          {userToken.typeUser === 2 ? (
            <Button type="primary" onClick={() => navigate(RoutesEnum.USER_INSERT_ADM)}>
              Inserir Adm
            </Button>
          ) : (
            <Button disabled type="primary">
              Inserir Adm
            </Button>
          )}
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
