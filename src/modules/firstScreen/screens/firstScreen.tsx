import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/urls';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import {
  getAuthorizationToken,
  unsetAuthorizationToken,
} from '../../../shared/functions/connections/auth';
import { ConnectionAPIGet } from '../../../shared/functions/connections/connectAPI';

export const FirstScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = getAuthorizationToken();
      if (token) {
        await ConnectionAPIGet(URL_USER)
          .then(() => {
            navigate(RoutesEnum.PRODUCT);
          })
          .catch(() => {
            navigate(RoutesEnum.LOGIN);
            unsetAuthorizationToken();
          });
      } else {
        navigate(RoutesEnum.LOGIN);
      }
    };

    verifyToken();
  }, []);
  return <Spin />;
};
