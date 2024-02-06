import { createContext, useContext, useState } from 'react';

type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}

interface GlobalData {
  accessToken?: string;
  notification?: NotificationProps;
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});
  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setNotification = (type: NotificationType, message: string, description?: string) => {
    setGlobalData({
      ...globalData,
      notification: {
        type,
        message,
        description,
      },
    });
  };

  return {
    notification: globalData?.notification,
    accessToken: globalData?.accessToken,
    setNotification,
  };
};
