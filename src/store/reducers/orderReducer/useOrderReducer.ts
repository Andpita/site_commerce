import { useDispatch } from 'react-redux';

import { OrderType } from '../../../shared/types/OrderType';
import { useAppSelector } from '../../hooks';
import { setOrderByIdAction, setOrdersAction } from '.';

export const useOrderReducer = () => {
  const dispatch = useDispatch();

  const { orders, orderById } = useAppSelector((state) => state.orderReducer);
  const setOrders = (orders: OrderType[]) => {
    dispatch(setOrdersAction(orders));
  };

  const setOrderById = (order: OrderType) => {
    dispatch(setOrderByIdAction(order));
  };

  return {
    orderById,
    orders,
    setOrders,
    setOrderById,
  };
};
