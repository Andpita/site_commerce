import { useState } from 'react';

import { Button } from '../../../shared/components/buttons/Button';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { useRequest } from '../../../shared/hooks/useRequest';
import { SVGHome } from '../../../shared/icons/SVGHome';
import {
  BackgroundImage,
  ContainerLogin,
  DivLogin,
  SubContainer,
  TitleLogin,
} from '../styles/LoginScreen.styles';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, authRequest } = useRequest();

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    authRequest({
      email: email,
      password: password,
    });
  };

  return (
    <DivLogin>
      <BackgroundImage src="./image/background.png" />
      <ContainerLogin>
        <SubContainer>
          <SVGHome />
          <TitleLogin level={2}>LOGIN</TitleLogin>
          <InputDefault title="E-MAIL" margin="10px 0px" onChange={changeEmail} value={email} />
          <InputDefault
            title="SENHA"
            margin="10px 0px"
            onChange={changePassword}
            value={password}
            type="password"
          />
          <Button
            loading={loading}
            type="primary"
            margin="36px 0px 16px 0px"
            onClick={handleSubmit}
          >
            ENTRAR
          </Button>
        </SubContainer>
      </ContainerLogin>
    </DivLogin>
  );
};
