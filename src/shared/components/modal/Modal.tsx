import { ModalProps } from 'antd';
import Modal from 'antd/es/modal/Modal';

export const ModalCustom = ({ ...props }: ModalProps) => {
  return <Modal {...props}></Modal>;
};
