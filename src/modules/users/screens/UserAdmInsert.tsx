import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import {
  DisplayFlexCenter,
  DisplayFlexEvenly,
} from '../../../shared/components/displays/display.styled';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { Screen } from '../../../shared/components/screen/Screen';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useUserInsert } from '../hooks/useUserInsert';

export const UserAdmInsert = () => {
  const { disableButton, handleChange, handleClickcancel, handleSubmit, loading, userAdm } =
    useUserInsert();

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'USUÁRIOS',
      navigateTo: RoutesEnum.USER_ALL,
    },
    {
      name: 'ADICIONAR ADM',
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexCenter>
        <LimitedContainer width={400}>
          <InputDefault
            onChange={(event) => handleChange(event, 'name')}
            value={userAdm.name}
            title="Nome"
            placeholder="Anderson Silva"
            margin="0px 0px 8px 0px"
          />
          <InputDefault
            onChange={(event) => handleChange(event, 'lastName')}
            value={userAdm.lastName}
            title="Apelido"
            placeholder="Pita"
            margin="0px 0px 8px 0px"
          />
          <InputDefault
            onChange={(event) => handleChange(event, 'email')}
            value={userAdm.email}
            title="E-mail"
            placeholder="email@email.com"
            margin="0px 0px 8px 0px"
          />
          <InputDefault
            onChange={(event) => handleChange(event, 'cpf')}
            value={userAdm.cpf}
            title="CPF"
            placeholder="000.000.000-00"
            margin="0px 0px 8px 0px"
          />
          <InputDefault
            onChange={(event) => handleChange(event, 'phone')}
            value={userAdm.phone}
            title="Telefone"
            placeholder="48999001122"
            margin="0px 0px 8px 0px"
          />
          <InputDefault
            onChange={(event) => handleChange(event, 'password')}
            value={userAdm.password}
            title="Senha para primeiro acesso"
            placeholder="123@abc"
            margin="0px 0px 8px 0px"
          />
          <DisplayFlexEvenly>
            <LimitedContainer width={120}>
              <Button
                disabled={disableButton}
                loading={loading}
                onClick={handleSubmit}
                type="primary"
              >
                Inserir Admin
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button danger type="primary" onClick={handleClickcancel}>
                Cancelar
              </Button>
            </LimitedContainer>
          </DisplayFlexEvenly>
        </LimitedContainer>
      </DisplayFlexCenter>
    </Screen>
  );
};
