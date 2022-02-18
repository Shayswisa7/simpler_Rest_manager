import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CounterOrder from '../components/Features/CounterOrder';
import Business from '../components/Menu/Business/Business';
import CreateOrder from '../components/Menu/CreateOrder/CreateOrder';
import SaveOrder from '../components/Menu/SaveOrders/SaveOrders';
import AllRoutes from '../pages/RoutingApp/routingAppPages';

const EditClientWab = () => {
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const fullOrder = useSelector((state) => state.fullOrder);
  const allOrders = useSelector((state) => state.allOrders);
  const employeeUser = useSelector((state) => state.employeeUser);
  const dispatch = useDispatch();

  const [typeEdit, setTypeEdit] = useState(() => {
    if (!window.localStorage.getItem('editSwitchClientWab')) {
      return 'עריכה';
    } else {
      return window.localStorage.getItem('editSwitchClientWab');
    }
  });
  useEffect(() => {
    window.localStorage.setItem('editSwitchClientWab', typeEdit);
  }, [typeEdit]);
  return (
    <React.Fragment>
      <div
        className="container"
        style={{ width: '100%', height: '100%', alignItems: 'center' }}
      >
        <h3>Edit Client Wab</h3>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setTypeEdit('saveOrder')}
        >
          ערוך רשימת מוצרים
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setTypeEdit('dealOrder')}
        >
          ערוך רשימת מנות שמורות
        </button>
        <div className="btn-group">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => setTypeEdit('createOrder')}
          >
            ערוך רשימת עסקיות
          </button>
        </div>
        <br />
        {typeEdit === 'dealOrder' ? <Business /> : ''}
        {typeEdit === 'saveOrder' ? <SaveOrder /> : ''}
        {typeEdit === 'createOrder' ? <CreateOrder /> : ''}
      </div>
    </React.Fragment>
  );
};

export default EditClientWab;
