import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';

export const FirstScreen = () => {
  const navigate = useNavigate();
  const { user } = useGlobalReducer();

  useEffect(() => {
    if (user) {
      navigate(RoutesEnum.PRODUCT);
    }
  }, [user]);
  return <Spin />;
};
