import { ButtonProps } from 'antd';

import { ButtonAntd } from './button.styels';

interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
}

export const Button = ({ margin, ...props }: ButtonCurrentProps) => {
  return <ButtonAntd style={{ margin: margin }} {...props} />;
};
