import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CounterOrder from '../components/Features/CounterOrder';
import Business from '../components/Menu/Business/Business';
import CreateOrder from '../components/Menu/CreateOrder/CreateOrder';
import SaveOrder from '../components/Menu/SaveOrders/SaveOrders';
import AllRoutes from '../pages/RoutingApp/routingAppPages';

import EditRestDataFormats from './RestDataFormats/EditReatDataFormats';
import EditPrices from './RestDataFormats/EditPrices';

const EditProducts = () => {
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const fullOrder = useSelector((state) => state.fullOrder);
  const allOrders = useSelector((state) => state.allOrders);
  const employeeUser = useSelector((state) => state.employeeUser);
  const dispatch = useDispatch();

  const [typeEdit, setTypeEdit] = useState(() => {
    if (!window.localStorage.getItem('editSwitch')) {
      return 'עריכה';
    } else {
      return window.localStorage.getItem('editSwitch');
    }
  });
  useEffect(() => {
    window.localStorage.setItem('editSwitch', typeEdit);
  }, [typeEdit]);
  return (
    <React.Fragment>
      <div
        className="container"
        style={{ width: '100%', height: '100%', alignItems: 'center' }}
      >
        <h3>Edit Products</h3>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTypeEdit('createOrder')}
          >
            ערוך פרטים
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTypeEdit('editPrices')}
          >
            ערוך מחירים
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTypeEdit('dealOrder')}
          >
            ערוך רשימת עסקיות
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTypeEdit('dealOrder')}
          >
            ערוך רשימת מנות שמורות
          </button>
        </div>
        <br />
        {typeEdit === 'dealOrder' ? <Business /> : ''}
        {typeEdit === 'editPrices' ? <EditPrices /> : ''}
        {typeEdit === 'createOrder' ? <EditRestDataFormats /> : ''}
      </div>
    </React.Fragment>
  );
};

export default EditProducts;
