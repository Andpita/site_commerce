import { Tooltip as TooltipAntd } from 'antd';

import { ContainerExternal, ContainerTooltip2 } from './tooltip.style';

interface TolltipProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  title?: string;
}

export const TooltipCustom = ({ children, tooltip, title }: TolltipProps) => {
  if (title) {
    return <TooltipAntd title={title}>{children}</TooltipAntd>;
  }

  return (
    <ContainerTooltip2>
      <ContainerExternal>{tooltip}</ContainerExternal>
      {children}
    </ContainerTooltip2>
  );
};
