import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER_INSERT_ADM } from '../../../shared/constants/urls';
import { InsertUser } from '../../../shared/dto/insertUser';
import { RoutesEnum } from '../../../shared/enums/route.enum';
import { ConnectionAPIPost } from '../../../shared/functions/connections/connectAPI';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';

export const useUserInsert = () => {
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const { setNotification } = useGlobalReducer();
  const navigate = useNavigate();
  const [userAdm, setUserAdm] = useState<InsertUser>({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    cpf: '',
    password: '',
  });

  useEffect(() => {
    if (userAdm.name && userAdm.lastName && userAdm.email && userAdm.cpf && userAdm.phone) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [userAdm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setUserAdm({
      ...userAdm,
      [key]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    await ConnectionAPIPost(URL_USER_INSERT_ADM, userAdm)
      .then(() => {
        setNotification('success', 'Sucesso!', 'Produto adicionado com sucesso!');
        navigate(RoutesEnum.USER_ALL);
      })
      .catch((e: Error) => {
        setNotification('error', e.message);
        navigate(RoutesEnum.USER_ALL);
      })
      .finally(() => setLoading(false));
  };

  const handleClickcancel = () => {
    navigate(RoutesEnum.USER_ALL);
  };

  return {
    loading,
    disableButton,
    handleClickcancel,
    handleSubmit,
    handleChange,
    userAdm,
  };
};
