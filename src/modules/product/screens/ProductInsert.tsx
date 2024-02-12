import { Screen } from '../../../shared/components/screen/Screen';
import { RoutesEnum } from '../../../shared/enums/route.enum';

export const ProductInsert = () => {
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
      <div>Olá Mundo!</div>
    </Screen>
  );
};
