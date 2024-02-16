import { Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../functions/connections/auth';
import { ContainerHeader, LogoutIcon } from './header.style';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

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
        <LogoutIcon onClick={showModal} />
      </ContainerHeader>
    </>
  );
};
