import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import { DisplayFlex } from '../../../shared/components/displays/display.styled';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import { Screen } from '../../../shared/components/screen/Screen';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { ContainerInsertProduct } from '../../product/styles/productInsert.style';
import { useCategoryInsert } from '../hooks/useCategoryInsert';

export const CategoryInsert = () => {
  const { category, loading, disableButton, handleClickcancel, handleChange, handleSubmit } =
    useCategoryInsert();

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'CATEGORIAS',
      navigateTo: RoutesEnum.CATEGORY,
    },
    {
      name: 'INSERIR CATEGORIA',
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <ContainerInsertProduct>
        <LimitedContainer width={400}>
          <InputDefault
            onChange={(event) => handleChange(event, 'name')}
            value={category.name}
            title="Categoria"
            placeholder="Camisa"
            margin="0px 0px 16px 0px"
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
