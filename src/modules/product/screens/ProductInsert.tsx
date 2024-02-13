import { useEffect, useState } from 'react';

import { Button } from '../../../shared/components/buttons/Button';
import { InputDefault } from '../../../shared/components/inputs/Input';
import { Screen } from '../../../shared/components/screen/Screen';
import { SelectDefault } from '../../../shared/components/select/Select';
import { URL_CATEGORY, URL_PRODUCTS } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { ConnectionAPIPost } from '../../../shared/functions/connections/connectAPI';
import { useDataContext } from '../../../shared/hooks/UseDataContext';
import { useRequest } from '../../../shared/hooks/useRequest';
import { LimitContainer } from '../styles/productInsert.style';

export const ProductInsert = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequest();
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    image: '',
    categoryId: 0,
  });

  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'PRODUTOS',
      navigateTo: RoutesEnum.PRODUCT,
    },
    {
      name: 'INSERIR PRODUTO',
    },
  ];

  const handleChange = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, object: string) => {
    setProduct({
      ...product,
      [object]: event.target.value,
    });
  };

  const moneyChange = (event: React.ChangeEvent<HTMLInputElement>, price: string) => {
    setProduct({
      ...product,
      [price]: Number(event.target.value),
    });
  };

  const handleSubmit = () => {
    ConnectionAPIPost(URL_PRODUCTS, product);
    console.log(product);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <LimitContainer>
        <InputDefault
          onChange={(event) => onChange(event, 'name')}
          value={product.name}
          title="Nome"
          placeholder="Camisa"
          margin="0px 0px 16px 0px"
        />
        <InputDefault
          onChange={(event) => onChange(event, 'image')}
          value={product.image}
          title="Url Image"
          placeholder="https://image.com/image"
          margin="0px 0px 16px 0px"
        />
        <InputDefault
          onChange={(event) => moneyChange(event, 'price')}
          value={Number(product.price)}
          title="Preço"
          placeholder="39,90"
          margin="0px 0px 16px 0px"
        />
        <SelectDefault
          title="Categoria"
          defaultValue="Camisa"
          style={{ width: '100%', marginBottom: '32px' }}
          onChange={handleChange}
          options={categories.map((category) => ({
            value: `${category.id}`,
            label: `${category.name}`,
          }))}
        />
        <Button type="primary" onClick={handleSubmit}>
          Inserir
        </Button>
      </LimitContainer>
    </Screen>
  );
};
