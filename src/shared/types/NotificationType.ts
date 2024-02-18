import { NotificationEnum } from '../enums/notification.enum';

export interface NotificationType {
  message: string;
  type: NotificationEnum;
  description?: string;
}
