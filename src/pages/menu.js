import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Features/counter';
import Business from '../components/Menu/Business/Business';
import CreateOrder from '../components/Menu/CreateOrder/CreateOrder';
import SaveOrder from '../components/Menu/SaveOrders/SaveOrders';
import AllRoutes from '../pages/RoutingApp/routingAppPages';
import AllProducts from '../components/Menu/AllProducts/AllProducts';

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
      <div className="container" style={{ width: '100%', height: '100%' }}>
        <h3>Menu</h3>
        <div
          className="btn-group"
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTypeMenu('allProducts')}
          >
            כל התפריט
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTypeMenu('createOrder')}
          >
            צור מנה
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTypeMenu('saveOrder')}
          >
            המנות שלך
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTypeMenu('dealOrder')}
          >
            עסקיות
          </button>
        </div>
        <br />
        <div
          className="div"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'column',
            msAlignSelf: 'center',
          }}
        >
          {typeMenu === 'dealOrder' ? <Business /> : ''}
          {typeMenu === 'saveOrder' ? <SaveOrder /> : ''}
          {typeMenu === 'createOrder' ? <CreateOrder /> : ''}
          {typeMenu === 'allProducts' ? <AllProducts /> : ''}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
