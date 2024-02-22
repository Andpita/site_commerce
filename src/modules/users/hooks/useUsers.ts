import { useEffect, useState } from 'react';

import { URL_USER_ALL } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { UserType } from '../../../shared/types/UserType';
import { useUsersReducer } from '../../../store/reducers/usersReducer/useCategoryReducer';

export const useUsers = () => {
  const { request, loading } = useRequest();
  const { users, setUsers } = useUsersReducer();
  const [userFiltered, setUserFiltered] = useState(users);

  useEffect(() => {
    request<UserType[]>(URL_USER_ALL, MethodsEnum.GET, setUsers);
  }, []);

  useEffect(() => {
    setUserFiltered([...users]);
  }, [users]);

  const onSearch = (value: string) => {
    if (!value) {
      value = '';
    } else {
      setUserFiltered([
        ...users.filter((users: UserType) => {
          return users.name.toUpperCase().includes(value.toUpperCase());
        }),
      ]);
    }
  };

  return {
    users: userFiltered,
    loading,
    onSearch,
  };
};
