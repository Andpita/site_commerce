import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const DivLogin = styled.div`
  display: flex;
  justify-content: right;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const TitleLogin = styled(Title)`
  color: #005544 !important;
`;

export const LogoImage = styled.img`
  width: 200px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  max-width: 500px;
  background-color: aquamarine;
  z-index: 2;
  padding: 20px;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
`;
