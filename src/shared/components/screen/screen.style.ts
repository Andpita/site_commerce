import styled from 'styled-components';

import { menuSize } from '../menu/menu.style';

export const marginScreen = 80 + menuSize;

export const ScreenContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  margin-left: auto;
  background-color: white;

  border-radius: 5px;
  width: calc(100% - ${marginScreen}px);
`;
