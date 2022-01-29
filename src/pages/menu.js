import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Features/counter';
import Business from '../components/Menu/Business/Business';
import CreateOrder from '../components/Menu/CreateOrder/CreateOrder';
import SaveOrder from '../components/Menu/SaveOrders/SaveOrders';
import AllRoutes from './routingAppPages';

import { AllImports } from '../imports/imports';

const Menu = () => {
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const fullOrder = useSelector((state) => state.fullOrder);
  const allOrders = useSelector((state) => state.allOrders);
  const employeeUser = useSelector((state) => state.employeeUser);
  const dispatch = useDispatch();

  const [typeMenu, setTypeMenu] = useState(() => {
    if (!window.localStorage.getItem('menuSwitch')) {
      return 'dealOrder';
    } else {
      return window.localStorage.getItem('menuSwitch');
    }
  });
  useEffect(() => {
    window.localStorage.setItem('menuSwitch', typeMenu);
  }, [typeMenu]);
  return (
    <React.Fragment>
      <h3>Menu</h3>
      <div>
        <button
          className="btn-primary"
          onClick={() => setTypeMenu('createOrder')}
        >
          צור מנה
        </button>
        <button
          className="btn-primary"
          onClick={() => setTypeMenu('saveOrder')}
        >
          המנות שלך
        </button>
        <button
          className="btn-primary"
          onClick={() => setTypeMenu('dealOrder')}
        >
          עסקיות
        </button>
      </div>
      {typeMenu === 'dealOrder' ? <Business /> : ''}
      {typeMenu === 'saveOrder' ? <SaveOrder /> : ''}
      {typeMenu === 'createOrder' ? <CreateOrder /> : ''}
    </React.Fragment>
  );
};

export default Menu;
