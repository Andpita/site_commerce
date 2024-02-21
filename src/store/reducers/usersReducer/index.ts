import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../../shared/types/UserType';

interface UsersState {
  users: UserType[];
}

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'usersReducer',
  initialState,
  reducers: {
    setUsersAction: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsersAction } = usersSlice.actions;

export default usersSlice.reducer;
