import { Select as SelectAntd, SelectProps as SelectPropsAntd } from 'antd';

import { BoxSelect, TitleSelect } from './select.styles';

interface SelectProps extends SelectPropsAntd {
  title?: string;
  margin?: string;
}

export const SelectDefault = ({ margin, title, ...props }: SelectProps) => {
  return (
    <BoxSelect style={{ margin }}>
      {title && <TitleSelect>{title}</TitleSelect>}
      <SelectAntd style={{ width: '100%' }} {...props} />
    </BoxSelect>
  );
};
