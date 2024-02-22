import { NavigateFunction } from 'react-router-dom';

import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { URL_USER } from '../../constants/urls';
import { RoutesEnum } from '../../enums/route.enum';
import { UserType } from '../../types/UserType';
import { ConnectionAPIGet } from './connectAPI';
import { getItemStorege, removeItemStorege, setItemStorege } from './storageProxy';

export const unsetAuthorizationToken = () => removeItemStorege(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
  if (token) setItemStorege(AUTHORIZATION_KEY, token);
};

export const getAuthorizationToken = () => getItemStorege(AUTHORIZATION_KEY);

export const checkAdm = () => {
  const token = getAuthorizationToken();
  const splitToken = token?.split('.');

  if (splitToken && splitToken?.length > 1) {
    return JSON.parse(window.atob(splitToken[1]));
  }
};

export const verifyLoggedIn = async () => {
  const token = getAuthorizationToken();

  if (!token) {
    location.href = '/login';
  }

  await ConnectionAPIGet<UserType>(URL_USER).catch(() => {
    unsetAuthorizationToken();
    location.href = '/login';
  });

  return 0;
};

export const logout = (navigate: NavigateFunction) => {
  unsetAuthorizationToken();
  navigate(RoutesEnum.LOGIN);
};
