import { AddressType } from './AddressType';
import { UserType } from './UserType';

export interface OrderType {
  date: string;
  userId: number;
  paymentId: number;
  orderId: number;
  user: UserType;
  address: AddressType;
}
