import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Business from '../components/Menu/Business/Business';
import CreateOrder from '../components/Menu/CreateOrder/CreateOrder';
import SaveOrder from '../components/Menu/SaveOrders/SaveOrders';
import AllProducts from '../components/Menu/AllProducts/AllProducts';
import CartFullOrder from '../components/Menu/Cart/CartFullOrder';

const Menu = () => {
  const fullOrderRest = useSelector((state) => state.fullOrderRest);
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
      <div
        className="hj"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <h3>Menu</h3>
        <div
          className="btn-group"
          style={{
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTypeMenu('cartFullOrder')}
          >
            חשבון | מנות(
            {fullOrderRest.status === 'success'
              ? fullOrderRest.obj.orders.length
              : 0}
            )
          </button>
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
            onClick={() => setTypeMenu('dealOrder')}
          >
            עסקיות
          </button>
        </div>
        <br />
        <div style={{ alignSelf: 'center' }}>
          {typeMenu === 'dealOrder' ? <Business /> : ''}
          {typeMenu === 'createOrder' ? <CreateOrder /> : ''}
          {typeMenu === 'allProducts' ? <AllProducts /> : ''}
          {typeMenu === 'cartFullOrder' ? <CartFullOrder /> : ''}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
