import { Tooltip } from 'antd';

import { ProductType } from '../types/ProductType';

interface TooltipImageProps {
  product: ProductType;
}

export const TooltipImage = ({ product }: TooltipImageProps) => {
  return (
    <Tooltip title={product.name} placement="leftBottom">
      <span>{product.id}</span>
    </Tooltip>
  );
};
