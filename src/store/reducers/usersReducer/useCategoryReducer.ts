import { useDispatch } from 'react-redux';

import { UserType } from '../../../shared/types/UserType';
import { useAppSelector } from '../../hooks';
import { setUsersAction } from '.';

export const useUsersReducer = () => {
  const dispatch = useDispatch();

  const { users } = useAppSelector((state) => state.usersReducer);
  const setUsers = (users: UserType[]) => {
    dispatch(setUsersAction(users));
  };

  return {
    users,
    setUsers,
  };
};
