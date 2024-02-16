import { LoginOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { menuSize } from '../menu/menu.style';

export const ContainerHeader = styled.div`
  height: 64px;
  width: calc(100% - ${menuSize}px);
  background-color: white;
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding-right: 32px;

  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
`;

export const LogoutIcon = styled(LoginOutlined)`
  font-size: 32px;
`;
