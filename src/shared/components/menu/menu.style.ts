import { Typography } from 'antd';
import styled from 'styled-components';

import { SVGHome } from '../../icons/SVGHome';

const { Text } = Typography;
export const menuSize = 270;

export const ContainerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  width: ${menuSize}px;
  background-color: #001529;
  -webkit-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
`;

export const ContainerLogoAndTitle = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
  box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
`;

export const Logo = styled(SVGHome)`
  width: 48px;
  height: 48px;
  margin: 0px 16px;
`;

export const Name = styled(Text)`
  color: white;
  font-weight: bolder;
  margin: 16px;
`;
