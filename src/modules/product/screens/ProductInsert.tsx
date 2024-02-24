import { useParams } from 'react-router-dom';

import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import {
  DisplayFlexCenter,
  DisplayFlexEvenly,
} from '../../../shared/components/displays/display.styled';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { InputMoney } from '../../../shared/components/inputs/inputMoney';
import { InputNumber } from '../../../shared/components/inputs/inputNumber';
import Loading from '../../../shared/components/loading/Loading';
import { Screen } from '../../../shared/components/screen/Screen';
import { SelectDefault } from '../../../shared/components/select/Select';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../../category/hooks/useCategory';
import { useInsertProduct } from '../hooks/useProductInsert';

export const ProductInsert = () => {
  const { categories } = useCategory();
  const { id } = useParams();

  const {
    handleChange,
    disableButton,
    handleClickcancel,
    handleChangeSelect,
    handleSubmit,
    product,
    loadingProduct,
  } = useInsertProduct(id);

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'PRODUTOS',
      navigateTo: RoutesEnum.PRODUCT,
    },
    {
      name: !id ? 'INSERIR PRODUTO' : 'EDITAR PRODUTO',
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexCenter>
        {loadingProduct ? (
          <DisplayFlexCenter>
            <Loading size="large" />
          </DisplayFlexCenter>
        ) : (
          <LimitedContainer width={450}>
            <InputDefault
              onChange={(event) => handleChange(event, 'name')}
              value={product.name}
              title="Nome"
              placeholder="Camisa"
              margin="0px 0px 8px 0px"
            />
            <InputDefault
              onChange={(event) => handleChange(event, 'image')}
              value={product.image}
              title="Url Image"
              placeholder="https://image.com/image"
              margin="0px 0px 8px 0px"
            />
            <InputMoney
              onChange={(event) => handleChange(event, 'price', true)}
              value={Number(product.price)}
              margin="0px 0px 8px 0px"
              placeholder="39,90"
              title="Preço"
            />
            <SelectDefault
              defaultValue={`${product.categoryId || ''}`}
              title="Categoria"
              style={{ width: '100%', marginBottom: '8px' }}
              onChange={handleChangeSelect}
              options={categories.map((category: CategoryType) => ({
                value: `${category.id}`,
                label: `${category.name}`,
              }))}
            />

            <DisplayFlexCenter>
              <InputNumber
                addonAfter={'cm'}
                onChange={(event) => handleChange(event, 'width', true)}
                value={Number(product.width)}
                margin="8px"
                title="Comprimento"
              />
              <InputNumber
                addonAfter={'cm'}
                onChange={(event) => handleChange(event, 'length', true)}
                value={Number(product.length)}
                margin="8px"
                title="Largura"
              />
              <InputNumber
                addonAfter={'cm'}
                onChange={(event) => handleChange(event, 'height', true)}
                value={Number(product.height)}
                margin="8px"
                title="Altura"
              />
            </DisplayFlexCenter>
            <DisplayFlexCenter style={{ marginBottom: '20px' }}>
              <InputNumber
                addonAfter={'cm'}
                onChange={(event) => handleChange(event, 'diameter', true)}
                value={Number(product.diameter)}
                margin="8px"
                title="Diametro"
              />
              <InputNumber
                addonAfter={'g'}
                onChange={(event) => handleChange(event, 'weight', true)}
                value={Number(product.weight)}
                margin="8px"
                title="Peso"
              />
              <InputDefault
                onChange={(event) => handleChange(event, 'active', true)}
                value={Number(product.active)}
                margin="8px"
                title="Ativo"
                disabled
              />
            </DisplayFlexCenter>
            <DisplayFlexEvenly>
              <LimitedContainer width={120}>
                <Button disabled={disableButton} type="primary" onClick={handleSubmit}>
                  {!id ? 'Inserir' : 'Salvar'}
                </Button>
              </LimitedContainer>
              <LimitedContainer width={120}>
                <Button danger type="primary" onClick={handleClickcancel}>
                  Cancelar
                </Button>
              </LimitedContainer>
            </DisplayFlexEvenly>
          </LimitedContainer>
        )}
      </DisplayFlexCenter>
    </Screen>
  );
};
