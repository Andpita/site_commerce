import axios from 'axios';
import { useState } from 'react';

import { Button } from '../../../shared/buttons/button';
import { InputDefault } from '../../../shared/inputs/input';
import {
  BackgroundImage,
  ContainerLogin,
  DivLogin,
  LogoImage,
  SubContainer,
  TitleLogin,
} from '../styles/LoginScreen.styles';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    await axios({
      method: 'post',
      url: 'http://localhost:4003/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        alert(result.data.accessToken);
        console.log('Fez login');
      })
      .catch((e) => {
        console.log('Deu erro');
        console.log(e);
      });
  };

  return (
    <DivLogin>
      <BackgroundImage src="./image/background.png" />
      <ContainerLogin>
        <SubContainer>
          <LogoImage src="./image/logo.png" />
          <TitleLogin level={2}>LOGIN</TitleLogin>
          <InputDefault title="E-MAIL" margin="10px 0px" onChange={changeEmail} value={email} />
          <InputDefault
            title="SENHA"
            margin="10px 0px"
            onChange={changePassword}
            value={password}
            type="password"
          />
          <Button type="primary" margin="36px 0px 16px 0px" onClick={handleSubmit}>
            ENTRAR
          </Button>
        </SubContainer>
      </ContainerLogin>
    </DivLogin>
  );
};
