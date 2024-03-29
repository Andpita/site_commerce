import styled from 'styled-components';

export const ContainerExternal = styled.div`
  display: none;
  position: absolute;
  bottom: -100px;
  left: 20px;
  padding: 4px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

export const ContainerTooltip2 = styled.div`
  position: relative;
  &:hover {
    div {
      display: block !important;
    }
  }
`;
