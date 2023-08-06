import React from 'react';
import CounterOrder from '../../Features/CounterOrder';
import { useDispatch, useSelector } from 'react-redux';
import CounterProduct from '../../Features/CounterProduct';
import business from '../../../redux/ItemsReducers/business';
import BusinessTemplate from '../Cart/BusinessTemplate';
const Business = () => {
  const business = useSelector((state) => state.business);
  return (
    <React.Fragment>
      {business.status === 'success'
        ? business.obj.map((item, i) => {
            return <BusinessTemplate product={business.obj[i]} />;
          })
        : ''}
    </React.Fragment>
  );
};
export default Business;
