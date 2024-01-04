import { InputDefault } from '../../../shared/inputs/input';
import {
  BackgroundImage,
  ContainerLogin,
  DivLogin,
  LogoImage,
  SubContainer,
} from '../styles/LoginScreen.styles';

export const LoginScreen = () => {
  return (
    <DivLogin>
      <BackgroundImage src="./image/background.png" />
      <ContainerLogin>
        <SubContainer>
          <LogoImage src="./image/logo.png" />
          <InputDefault title="USÚARIO" />
          <InputDefault title="SENHA" />
        </SubContainer>
      </ContainerLogin>
    </DivLogin>
  );
};
