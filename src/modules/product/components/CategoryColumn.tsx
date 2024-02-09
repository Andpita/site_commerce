import { Tag } from 'antd';

import { CategoryType } from '../types/CategoryType';

interface CategoryColumnProps {
  category?: CategoryType;
}

const colors: string[] = [
  'volcano',
  'cyan',
  'orange',
  'green',
  'magenta',
  'red',
  'gold',
  'lime',
  'blue',
  'purple',
];

export const CategoryColumn = ({ category }: CategoryColumnProps) => {
  if (!category) {
    return null;
  }
  const currentColor = colors[category.id - 1] || colors[6];
  return <Tag color={currentColor}>{category.name}</Tag>;
};
