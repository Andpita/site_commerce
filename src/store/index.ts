import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './reducers/categoryReducer';
import globalReducer from './reducers/globalReducer';
import orderReducer from './reducers/orderReducer';
import productReducer from './reducers/productsReducer';
import ticketReducer from './reducers/ticketReducer';
import usersReducer from './reducers/usersReducer';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    categoryReducer,
    globalReducer,
    orderReducer,
    productReducer,
    usersReducer,
    ticketReducer,
  },
});
