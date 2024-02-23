import { useEffect, useState } from 'react';

import { InputDefault, InputProps } from './InputDefault';

interface InputNumber extends InputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addonAfter?: string;
}

export const InputNumber = ({ value, onChange, addonAfter = 'R$', ...props }: InputNumber) => {
  const [currentValue, setCurrentValue] = useState<string>(`${value}`);

  useEffect(() => {
    const valueString = `${value}`;

    const newValue = valueString.replace(/\D/g, '');
    setCurrentValue(newValue);
  }, [value]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueRemoved = event.target.value.replace(',', '');

    onChange({
      ...event,
      target: {
        ...event.target,
        value: valueRemoved,
      },
    });
  };

  return (
    <InputDefault
      addonAfter={addonAfter}
      value={currentValue}
      onChange={handleOnChange}
      {...props}
    />
  );
};
