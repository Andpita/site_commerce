import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrderType } from '../../../shared/types/OrderType';

interface OrderState {
  orders: OrderType[];
  orderById?: OrderType;
}

const initialState: OrderState = {
  orders: [],
  orderById: undefined,
};

export const orderSlice = createSlice({
  name: 'orderReducer',
  initialState,
  reducers: {
    setOrdersAction: (state, action: PayloadAction<OrderType[]>) => {
      state.orders = action.payload;
    },
    setOrderByIdAction: (state, action: PayloadAction<OrderType>) => {
      state.orderById = action.payload;
    },
  },
});

export const { setOrdersAction, setOrderByIdAction } = orderSlice.actions;

export default orderSlice.reducer;
