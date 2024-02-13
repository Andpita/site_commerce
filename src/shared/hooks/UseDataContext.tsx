import { createContext, useContext, useState } from 'react';

import { CategoryType } from '../../modules/product/types/CategoryType';
import { ProductType } from '../../modules/product/types/ProductType';

interface DataContext {
  products?: ProductType[];
  categories?: CategoryType[];
}

interface DataContextProps {
  data: DataContext;
  setData: (data: DataContext) => void;
}

interface DataProviderProps {
  children: React.ReactNode;
}

const DataContext = createContext({} as DataContextProps);

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataContext>({});
  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const { data, setData } = useContext(DataContext);

  const setProducts = (products: ProductType[]) => {
    setData({
      ...data,
      products,
    });
  };

  const setCategories = (categories: CategoryType[]) => {
    setData({
      ...data,
      categories,
    });
  };

  return {
    setProducts,
    setCategories,
    products: data?.products || [],
    categories: data?.categories || [],
  };
};
