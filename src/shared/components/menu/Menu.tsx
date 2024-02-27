import {
  AreaChartOutlined,
  HomeOutlined,
  LaptopOutlined,
  PlusSquareOutlined,
  ProfileOutlined,
  SafetyCertificateOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu as MenuAntd } from 'antd';
import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '../../enums/route.enum';
import { ContainerLogoAndTitle, ContainerMenu, Logo, menuSize, Name } from './menu.style';

type MenuItem = Required<MenuProps>['items'][number];

export const Menu = () => {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      key: 'Home',
      label: 'Principal',
      icon: <HomeOutlined />,
    },
    {
      key: 'Products',
      label: 'Produtos',
      icon: <LaptopOutlined />,
      children: [
        {
          key: 'product_view',
          label: 'Visualizar',
          icon: <UnorderedListOutlined />,
          onClick: () => navigate(RoutesEnum.PRODUCT),
        },
        {
          key: 'product_insert',
          label: 'Inserir',
          icon: <PlusSquareOutlined />,
          onClick: () => navigate(RoutesEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: 'Category',
      label: 'Categorias',
      icon: <ProfileOutlined />,
      children: [
        {
          key: 'category_view',
          label: 'Visualizar',
          icon: <UnorderedListOutlined />,
          onClick: () => navigate(RoutesEnum.CATEGORY),
        },
        {
          key: 'category_insert',
          label: 'Inserir',
          icon: <PlusSquareOutlined />,
          onClick: () => navigate(RoutesEnum.CATEGORY_INSERT),
        },
      ],
    },
    {
      key: 'order',
      label: 'Pedidos',
      icon: <SafetyCertificateOutlined />,
      onClick: () => navigate(RoutesEnum.ORDER),
    },
    {
      key: 'user',
      label: 'Clientes',
      icon: <UserOutlined />,
      onClick: () => navigate(RoutesEnum.USER_ALL),
    },
    {
      key: 'user',
      label: 'Relatórios',
      icon: <AreaChartOutlined />,
      onClick: () => alert('Desabled'),
    },
  ];
  return (
    <ContainerMenu>
      <ContainerLogoAndTitle>
        <Logo />
        <Name>E-COMMERCE</Name>
      </ContainerLogoAndTitle>
      <MenuAntd
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
        style={{ width: `${menuSize}px` }}
      />
    </ContainerMenu>
  );
};
