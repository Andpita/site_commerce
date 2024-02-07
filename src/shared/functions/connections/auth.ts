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

export const verifyLoggedIn = async (setUser: (user: UserType) => void, user?: UserType) => {
  const token = getAuthorizationToken();

  if (!token) {
    location.href = '/login';
  }

  if (!user) {
    await ConnectionAPIGet<UserType>(URL_USER)
      .then((userReturn) => {
        setUser(userReturn);
      })
      .catch(() => {
        unsetAuthorizationToken();
        location.href = '/login';
      });
  }
  return 0;
};
