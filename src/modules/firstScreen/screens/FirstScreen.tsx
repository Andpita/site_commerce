import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useGlobalContext } from '../../../shared/hooks/UseGlobalContext';

export const FirstScreen = () => {
  const navigate = useNavigate();
  const { user } = useGlobalContext();

  useEffect(() => {
    if (user) {
      navigate(RoutesEnum.PRODUCT);
    }
  }, [user]);
  return <Spin />;
};
