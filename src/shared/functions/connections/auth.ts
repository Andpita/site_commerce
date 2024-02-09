import { UserType } from '../../../modules/login/types/UserType';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { URL_USER } from '../../constants/urls';
import { ConnectionAPIGet } from './connectAPI';
import { getItemStorege, removeItemStorege, setItemStorege } from './storageProxy';

export const unsetAuthorizationToken = () => removeItemStorege(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
  if (token) setItemStorege(AUTHORIZATION_KEY, token);
};

export const getAuthorizationToken = () => getItemStorege(AUTHORIZATION_KEY);

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
