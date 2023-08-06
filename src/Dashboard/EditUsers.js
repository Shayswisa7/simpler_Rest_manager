import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CounterOrder from '../components/Features/CounterOrder';
import Business from '../components/Menu/Business/Business';
import CreateOrder from '../components/Menu/CreateOrder/CreateOrder';
import SaveOrder from '../components/Menu/SaveOrders/SaveOrders';
import AllRoutes from '../pages/RoutingApp/routingAppPages';

import CreateUser from '../pages/createUser';
import Login from '../pages/shiftLogIn';
import LogOut from '../pages/shiftLogOut';

const EditUsers = () => {
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const fullOrder = useSelector((state) => state.fullOrder);
  const allOrders = useSelector((state) => state.allOrders);
  const employeeUser = useSelector((state) => state.employeeUser);
  const dispatch = useDispatch();

  const [typeEdit, setTypeEdit] = useState(() => {
    if (!window.localStorage.getItem('editSwitchUsers')) {
      return 'עריכה';
    } else {
      return window.localStorage.getItem('editSwitchUsers');
    }
  });
  useEffect(() => {
    window.localStorage.setItem('editSwitchUsers', typeEdit);
  }, [typeEdit]);
  return (
    <React.Fragment>
      <div
        className="container"
        style={{ width: '100%', height: '100%', alignItems: 'center' }}
      >
        <h3>Edit Users</h3>
        <div className="btn-group">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => setTypeEdit('createOrder')}
          >
            ערוך פרטי משתמש
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => setTypeEdit('saveOrder')}
          >
            יצירת משתמש
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => setTypeEdit('dealOrder')}
          >
            מחיקת משתמש
          </button>
        </div>
        <br />
        {typeEdit === 'dealOrder' ? <Login /> : ''}
        {typeEdit === 'saveOrder' ? <CreateUser /> : ''}
        {typeEdit === 'createOrder' ? <LogOut /> : ''}
      </div>
    </React.Fragment>
  );
};

export default EditUsers;
