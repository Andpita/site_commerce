import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/components/buttons/Button';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { ContainerPage404 } from '../styles/page404.styles';

export const Page404 = () => {
  const navigate = useNavigate();
  return (
    <ContainerPage404>
      <Result
        status="404"
        title="404"
        subTitle="Desculpe, essa página não foi encontrada."
        extra={
          <Button type="primary" onClick={() => navigate(RoutesEnum.LOGIN)}>
            Página de Login
          </Button>
        }
      />
    </ContainerPage404>
  );
};
