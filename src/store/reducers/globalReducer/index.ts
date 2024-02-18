import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NotificationType } from '../../../shared/types/NotificationType';
import { UserType } from '../../../shared/types/UserType';

interface GlobalReducer {
  notification?: NotificationType;
  user?: UserType;
}

const initialState: GlobalReducer = {
  notification: undefined,
  user: undefined,
};

export const globalSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setNotificationAction: (state, action: PayloadAction<NotificationType>) => {
      state.notification = action.payload;
    },
    setUserAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { setNotificationAction, setUserAction } = globalSlice.actions;

export default globalSlice.reducer;
