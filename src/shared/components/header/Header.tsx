import { Modal } from 'antd';

import { logout } from '../../functions/connections/auth';
import { useModal } from '../../hooks/useModal';
import { ContainerHeader, LogoutIcon } from './header.style';

export const Header = () => {
  const { isModalOpen, showModal, handleCancel, navigate } = useModal();

  return (
    <>
      <Modal
        title="Atenção"
        open={isModalOpen}
        onOk={() => logout(navigate)}
        onCancel={handleCancel}
      >
        <p>Tem certeza que deseja sair?</p>
      </Modal>
      <ContainerHeader>
        <LogoutIcon onClick={() => showModal()} />
      </ContainerHeader>
    </>
  );
};
