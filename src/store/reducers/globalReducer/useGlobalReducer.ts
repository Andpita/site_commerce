import { useDispatch } from 'react-redux';

import { NotificationEnum } from '../../../shared/enums/notification.enum';
import { UserType } from '../../../shared/types/UserType';
import { useAppSelector } from '../../hooks';
import { setNotificationAction, setUserAction } from '.';

export const useGlobalReducer = () => {
  const dispatch = useDispatch();
  const { user, notification } = useAppSelector((state) => state.globalReducer);

  const setNotification = (type: NotificationEnum, message: string, description?: string) => {
    dispatch(
      setNotificationAction({
        type,
        message,
        description,
      }),
    );
  };

  const setUser = (user: UserType) => {
    dispatch(setUserAction(user));
  };

  return {
    user,
    notification,
    setNotification,
    setUser,
  };
};
