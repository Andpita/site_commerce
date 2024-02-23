import { ButtonProps } from 'antd';

import { ButtonAntd } from './button.styels';

interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
  width?: string;
  marginLeft?: string;
}

export const Button = ({ margin, width, marginLeft, ...props }: ButtonCurrentProps) => {
  return <ButtonAntd style={{ margin: margin, width: width, marginLeft }} {...props} />;
};
