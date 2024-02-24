import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);

  const showModal = (idProps?: number): void => {
    setIsModalOpen(true);
    if (idProps) {
      setId(idProps);
    }
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  return {
    navigate,
    showModal,
    handleCancel,
    isModalOpen,
    id,
  };
};
