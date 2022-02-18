import React from 'react';
import * as Icon from 'react-bootstrap-icons';
export const NavItems = [
  {
    title: 'בית',
    path: '/',
    icon: <Icon.HouseFill />,
    cName: 'nav-text',
  },
  {
    title: 'תפריט',
    path: '/Menu',
    icon: <Icon.BookHalf />,
    cName: 'nav-text',
  },
  {
    title: 'הזמנות בהמתנה',
    path: '/CalibrationTests',
    icon: <Icon.HouseFill />,
    cName: 'nav-text',
  },
  {
    title: 'דף מנהל',
    path: '/Dashboard',
    icon: <Icon.HouseFill />,
    cName: 'nav-text',
    /*pages: [
      {
        title: 'עריכת נותנים',
        path: '/',
        icon: <Icon.HouseFill />,
        cName: 'nav-text',
      },
      {
        title: 'דף מנהל',
        path: '/',
        icon: <Icon.HouseFill />,
        cName: 'nav-text',
      },
    ],*/
  },
  {
    title: 'כניסה למשמרת',
    path: '/Login',
    icon: <Icon.HouseFill />,
    cName: 'nav-text',
  },
  {
    title: 'יצירת משתמש',
    path: '/CreateUser',
    icon: <Icon.HouseFill />,
    cName: 'nav-text',
  },
  {
    title: 'צא',
    path: '/Logout',
    icon: <Icon.HouseFill />,
    cName: 'nav-text',
  },
];
export default NavItems;
