import { AddressType } from './AddressType';
import { OrderProductType } from './OrderProductType';
import { PaymentType } from './PaymentType';
import { UserType } from './UserType';

export interface OrderType {
  date: string;
  userId: number;
  paymentId: number;
  orderId: number;
  user?: UserType;
  address?: AddressType;
  payment?: PaymentType;
  orderProduct?: OrderProductType[];
}
