import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { getItemStorege, removeItemStorege, setItemStorege } from './storageProxy';

export const unsetAuthorizationToken = () => removeItemStorege(AUTHORIZATION_KEY);
export const setAuthorizationToken = (token?: string) => {
  if (token) setItemStorege(AUTHORIZATION_KEY, token);
};
export const getAuthorizationToken = () => getItemStorege(AUTHORIZATION_KEY);
