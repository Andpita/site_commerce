import { useEffect } from 'react';

import { URL_USER_ALL } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { UserType } from '../../../shared/types/UserType';
import { useUsersReducer } from '../../../store/reducers/usersReducer/useCategoryReducer';

export const useUsers = () => {
  const { request, loading } = useRequest();
  const { users, setUsers } = useUsersReducer();
  useEffect(() => {
    request<UserType[]>(URL_USER_ALL, MethodsEnum.GET, setUsers);
  }, []);

  return {
    users,
    loading,
  };
};
