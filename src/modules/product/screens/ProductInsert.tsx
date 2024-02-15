import { useEffect } from 'react';

import { Button } from '../../../shared/components/buttons/Button';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { InputMoney } from '../../../shared/components/inputs/inputMoney';
import { Screen } from '../../../shared/components/screen/Screen';
import { SelectDefault } from '../../../shared/components/select/Select';
import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useDataContext } from '../../../shared/hooks/UseDataContext';
import { useRequest } from '../../../shared/hooks/useRequest';
import { DisplayFlex } from '../../../shared/styles/display.styled';
import { LimitedContainer } from '../../../shared/styles/limitedContainer.style';
import { useInsertProduct } from '../hooks/useProductInsert';
import { ContainerInsertProduct } from '../styles/productInsert.style';

export const ProductInsert = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequest();
  const {
    handleChange,
    disableButton,
    handleClickcancel,
    handleChangeSelect,
    handleSubmit,
    loading,
    product,
  } = useInsertProduct();

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

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <ContainerInsertProduct>
        <LimitedContainer width={400}>
          <InputDefault
            onChange={(event) => handleChange(event, 'name')}
            value={product.name}
            title="Nome"
            placeholder="Camisa"
            margin="0px 0px 16px 0px"
          />
          <InputDefault
            onChange={(event) => handleChange(event, 'image')}
            value={product.image}
            title="Url Image"
            placeholder="https://image.com/image"
            margin="0px 0px 16px 0px"
          />
          <InputMoney
            onChange={(event) => handleChange(event, 'price', true)}
            value={Number(product.price)}
            margin="0px 0px 16px 0px"
            placeholder="39,90"
            title="Preço"
          />
          <SelectDefault
            title="Categoria"
            defaultValue="Camisa"
            style={{ width: '100%', marginBottom: '32px' }}
            onChange={handleChangeSelect}
            options={categories.map((category) => ({
              value: `${category.id}`,
              label: `${category.name}`,
            }))}
          />
          <DisplayFlex>
            <LimitedContainer width={120}>
              <Button
                loading={loading}
                disabled={disableButton}
                type="primary"
                onClick={handleSubmit}
              >
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
