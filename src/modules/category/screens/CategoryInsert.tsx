import { useParams } from 'react-router-dom';

import { Button } from '../../../shared/components/buttons/Button';
import { LimitedContainer } from '../../../shared/components/containers/limitedContainers.styled';
import {
  DisplayFlexCenter,
  DisplayFlexEvenly,
} from '../../../shared/components/displays/display.styled';
import { InputDefault } from '../../../shared/components/inputs/InputDefault';
import Loading from '../../../shared/components/loading/Loading';
import { Screen } from '../../../shared/components/screen/Screen';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useCategoryInsert } from '../hooks/useCategoryInsert';

export const CategoryInsert = () => {
  const { id } = useParams();
  const {
    category,
    loading,
    disableButton,
    handleClickcancel,
    handleChange,
    handleSubmit,
    loadingCategory,
  } = useCategoryInsert(id);

  const listBreadcrumb = [
    {
      name: 'HOME',
    },
    {
      name: 'CATEGORIAS',
      navigateTo: RoutesEnum.CATEGORY,
    },
    {
      name: id ? 'EDITAR CATEGORIA' : 'INSERIR CATEGORIA',
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexCenter>
        <LimitedContainer width={400}>
          {loadingCategory ? (
            <DisplayFlexCenter>
              <Loading size="large" />
            </DisplayFlexCenter>
          ) : (
            <>
              <InputDefault
                defaultValue={id ? category.name : ''}
                onChange={(event) => handleChange(event, 'name')}
                value={category.name}
                title="Categoria"
                placeholder="Camisa"
                margin="0px 0px 16px 0px"
              />
              <DisplayFlexEvenly>
                <LimitedContainer width={120}>
                  <Button
                    loading={loading}
                    disabled={disableButton}
                    type="primary"
                    onClick={handleSubmit}
                  >
                    {id ? 'Editar' : 'Inserir'}
                  </Button>
                </LimitedContainer>
                <LimitedContainer width={120}>
                  <Button danger type="primary" onClick={handleClickcancel}>
                    Cancelar
                  </Button>
                </LimitedContainer>
              </DisplayFlexEvenly>
            </>
          )}
        </LimitedContainer>
      </DisplayFlexCenter>
    </Screen>
  );
};
