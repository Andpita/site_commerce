import { useGlobalContext } from '../../../shared/hooks/UseGlobalContext';

export const Product = () => {
  const { user } = useGlobalContext();
  return <div>Produtos---------{user?.name}</div>;
};
