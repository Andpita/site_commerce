import { Screen } from '../../../shared/components/screen/Screen';
import { useCategory } from '../hooks/useCategory';

export const Category = () => {
  const { categories } = useCategory();
  return (
    <Screen>
      {categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </Screen>
  );
};
