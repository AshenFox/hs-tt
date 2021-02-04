import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  TeamOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const mainNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`, // /home
    title: 'sidenav.main',
    icon: '',
    breadcrumb: true,
    submenu: [
      {
        key: 'dashboard',
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: 'sidenav.main.dashboard',
        icon: DashboardOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: 'catalog',
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: 'sidenav.main.catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'catalog-goods',
            path: `${APP_PREFIX_PATH}/main/catalog/goods`,
            title: 'sidenav.main.catalog.goods',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'catalog-categories',
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: 'sidenav.main.catalog.categories',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'catalog-collections',
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: 'sidenav.main.catalog.collections',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'catalog-combo',
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: 'sidenav.main.catalog.combo',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: 'orders',
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: 'sidenav.main.orders',
        icon: ShoppingOutlined,
        breadcrumb: true, // ?
        submenu: [],
      },
      {
        key: 'clients',
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: 'sidenav.main.clients',
        icon: UserOutlined,
        breadcrumb: true, // ?
        submenu: [
          {
            key: 'clients-clientlist',
            path: `${APP_PREFIX_PATH}/main/clients/clientlist`,
            title: 'sidenav.main.clients.clientlist',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'clients-clientgroups',
            path: `${APP_PREFIX_PATH}/main/clients/clientgroups`,
            title: 'sidenav.main.clients.clientgroups',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: 'sidenav.main.banners',
        icon: PictureOutlined,
        breadcrumb: true, // ?
        submenu: [],
      },
      {
        key: 'promocodes',
        path: `${APP_PREFIX_PATH}/main/promocodes`,
        title: 'sidenav.main.promocodes',
        icon: GiftOutlined, // <GiftOutlined />
        breadcrumb: true, // ?
        submenu: [],
      },
      {
        key: 'offlinepoints',
        path: `${APP_PREFIX_PATH}/main/offlinepoints`,
        title: 'sidenav.main.offlinepoints',
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'offlinepoints-addresses',
            path: `${APP_PREFIX_PATH}/main/offlinepoints/addresses`,
            title: 'sidenav.main.offlinepoints.addresses',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'offlinepoints-geozones',
            path: `${APP_PREFIX_PATH}/main/offlinepoints/geozones`,
            title: 'sidenav.main.offlinepoints.geozones',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: 'staff',
        path: `${APP_PREFIX_PATH}/main/staff`,
        title: 'sidenav.main.staff',
        icon: TeamOutlined,
        breadcrumb: true, // ?
        submenu: [],
      },
      {
        key: 'distributions',
        path: `${APP_PREFIX_PATH}/main/distributions`,
        title: 'sidenav.main.distributions',
        icon: MailOutlined,
        breadcrumb: true, // ?
        submenu: [],
      },
    ],
  },
];

const systemNavTree = [
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'sidenav.system',
    icon: '',
    breadcrumb: true,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'sidenav.system.settings',
        icon: SettingOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: 'mobileapp',
        path: `${APP_PREFIX_PATH}/system/mobileapp`,
        title: 'sidenav.system.mobileapp',
        icon: MobileOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'sidenav.system.logs',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];
const navigationConfig = [...mainNavTree, ...systemNavTree];

export default navigationConfig;
