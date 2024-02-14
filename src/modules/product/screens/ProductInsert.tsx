import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/components/buttons/Button';
import { InputDefault } from '../../../shared/components/inputs/Input';
import { Screen } from '../../../shared/components/screen/Screen';
import { SelectDefault } from '../../../shared/components/select/Select';
import { URL_CATEGORY, URL_PRODUCTS } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { ConnectionAPIPost } from '../../../shared/functions/connections/connectAPI';
import { useDataContext } from '../../../shared/hooks/UseDataContext';
import { useGlobalContext } from '../../../shared/hooks/UseGlobalContext';
import { useRequest } from '../../../shared/hooks/useRequest';
import { DisplayFlex } from '../../../shared/styles/display.styled';
import { LimitedContainer } from '../../../shared/styles/limitedContainer.style';
import { ContainerInsertProduct } from '../styles/productInsert.style';

export const ProductInsert = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequest();
  const { setNotification } = useGlobalContext();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    image: '',
    categoryId: 1,
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

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    object: string,
    price?: boolean,
  ) => {
    setProduct({
      ...product,
      [object]: price ? Number(event.target.value) : event.target.value,
    });
  };

  const handleSubmit = async () => {
    await ConnectionAPIPost(URL_PRODUCTS, product)
      .then(() => {
        setNotification('success', 'Sucesso!', 'Produto adicionado com sucesso!');
        navigate(RoutesEnum.PRODUCT);
      })
      .catch((e: Error) => {
        setNotification('error', e.message);
        navigate(RoutesEnum.PRODUCT);
      });
  };

  const handleClickcancel = () => {
    navigate(RoutesEnum.PRODUCT);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <ContainerInsertProduct>
        <LimitedContainer width={400}>
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
            onChange={(event) => onChange(event, 'price', true)}
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
          <DisplayFlex>
            <LimitedContainer width={120}>
              <Button type="primary" onClick={handleSubmit}>
                Inserir
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button danger type="primary" onClick={handleClickcancel}>
                Cancelar
              </Button>
            </LimitedContainer>
          </DisplayFlex>
        </LimitedContainer>
      </ContainerInsertProduct>
    </Screen>
  );
};
