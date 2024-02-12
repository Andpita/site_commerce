import { TooltipCustom } from '../../../shared/components/tooltip/TooltipCustom';
import { ImageProduct } from '../styles/tooltypeImage.style';
import { ProductType } from '../types/ProductType';

interface TooltipImageProps {
  product: ProductType;
}

export const TooltipImage = ({ product }: TooltipImageProps) => {
  return (
    <TooltipCustom tooltip={<ImageProduct src={product.image} />}>
      <span>{product.id}</span>
    </TooltipCustom>
  );
};

export default TooltipImage;
