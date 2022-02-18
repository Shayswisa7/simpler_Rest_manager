import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import itemsInOrder from '../../../redux/ItemsReducers/itemsInOrder';
import ProductTemplate from './ProductsTemplate';
import ComplexOrdersTemplate from './ComplexOrdersTemplate';
import { useForm } from 'react-hook-form';
import { addDitailsUserRest } from '../../../redux/HandleOrdersReducers/fullOrderRest';
import {
  addOrderToArray,
  removeOrderFromArray,
} from '../../../redux/HandleOrdersReducers/allOrders';
import { useEffect } from 'react';

const CartFullOrder = () => {
  const dispatch = useDispatch();
  const fullOrderRest = useSelector((state) => state.fullOrderRest);
  const allOrders = useSelector((state) => state.allOrders);
  let total = 0;
  const [removeA, setRemoveA] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const createOrder = () => {
    console.log(fullOrderRest);
    if (allOrders.queArrObjOnline.length) setRemoveA(true);
    dispatch(addOrderToArray(fullOrderRest.obj.orders));
  };
  useEffect(() => {
    console.log(allOrders.queArrObjOnline);
    if (removeA) {
      console.log('________');
      dispatch(removeOrderFromArray({ id: 0 }));
      setRemoveA(false);
    }
  }, [allOrders.queArrObjOnline]);
  console.log(allOrders);
  const totalSum1 = () => {
    let sum = 0;
    for (let i in fullOrderRest.obj.price) {
      sum += fullOrderRest.obj.price[i].sumPrice;
    }
    return sum;
  };
  const [totalSum, setTotalSum] = useState(() => totalSum1());
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {
              (fullOrderRest.obj.fullName !== ''
                ? fullOrderRest.obj.fullName
                : dispatch(
                    addDitailsUserRest({ key: 'fullName', value: 'לקוח' })
                  ),
              fullOrderRest.obj.fullName)
            }
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div
            className="bg-light py-8 px-4 shadow sm:rounded-lg sm:px-10"
            style={{ textAlign: 'start', width: '250px' }}
          >
            <h4>{fullOrderRest.obj.fullName}:</h4>
            <h4>{fullOrderRest.obj.phoneNamber}</h4>
            <h4>הזמנות</h4>
            {fullOrderRest.obj.price.map((item, i) => {
              return (
                <div>
                  <h4>{`שם: ${
                    fullOrderRest.obj.orders[i].name
                      ? fullOrderRest.obj.orders[i].name
                      : 'תוספות'
                  }`}</h4>
                  <h4>{`סכום לתשלום :  ${fullOrderRest.obj.price[i].sumPrice}`}</h4>
                </div>
              );
            })}
            <h4>{`סכום כולל לתשלום :  ${totalSum}`}</h4>
            <button className="btn btn-primary" onClick={() => createOrder()}>
              שלח לעבודה{' '}
            </button>
          </div>
        </div>
        <div
          className="col"
          style={{
            textAlign: 'start',
            width: '650px',
          }}
        >
          {fullOrderRest.status === 'success'
            ? fullOrderRest.obj.orders.map((item, i) => {
                if (
                  Object.keys(fullOrderRest.obj.orders[i]).includes('business')
                )
                  return (
                    <ProductTemplate
                      product={fullOrderRest.obj.orders[i]}
                      posArray={i}
                    />
                  );
                return (
                  <ComplexOrdersTemplate
                    props={fullOrderRest.obj.orders[i]}
                    posArray={i}
                  />
                );
              })
            : ''}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartFullOrder;
