import { ChangeEvent, FC } from 'react';
import { Option, Select } from './styles';

interface FilterProps {
  items: string[] | number[];
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: number;
}

export const Filter: FC<FilterProps> = ({ placeholder, items, onChange, value }) => {
  const renderOptions = () =>
    items.map((item: string | number) => (
      <Option key={item} value={item}>
        {item}
      </Option>
    ));

  return (
    <Select onChange={(e) => onChange(e)} value={value === 0 ? placeholder : items[value - 1]}>
      <Option key={placeholder} value={placeholder}>
        {placeholder}
      </Option>
      {renderOptions()}
    </Select>
  );
};
