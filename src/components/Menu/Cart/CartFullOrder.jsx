import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import itemsInOrder from '../../../redux/ItemsReducers/itemsInOrder';
import ProductTemplate from './ProductsTemplate';
import CompleteOrdersTemplate from './CompleteOrdersTemplate';
import { useForm } from 'react-hook-form';
import { addDitailsUserRest as addDitailsUserRestAction } from '../../../redux/HandleOrdersReducers/fullOrderRest';
import { postFullOrderRest as postFullOrderRestThunk } from '../../../redux/HandleOrdersReducers/fullOrderRest';
import {
  addOrderToArray,
  removeOrderFromArray,
  setDetailsByType,
  setDetailsDateStart,
} from '../../../redux/HandleOrdersReducers/allOrders';
import { postDataToArduino as postDataToArduinoThunk } from '../../../redux/HandleOrdersReducers/allOrders';
import { postAllOrders as postAllOrdersThunk } from '../../../redux/HandleOrdersReducers/allOrders';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const CartFullOrder = () => {
  const dispatch = useDispatch();
  const fullOrderRest = useSelector((state) => state.fullOrderRest);
  const allOrders = useSelector((state) => state.allOrders);
  let total = 0;
  const [add, setAdd] = useState(false);
  const [addToWaitng, setAddToWaitng] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [address, setAddress] = useState('');
  const [phoneNamber, setPhoneNamber] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const createOrder = () => {
    console.log(fullOrderRest);
    dispatch(setDetailsByType({ type: 'userPhoneNumber', value: phoneNamber }));
    dispatch(
      setDetailsByType({
        type: 'itemsAndPrices',
        value: fullOrderRest.obj.price,
      })
    );
    dispatch(
      addDitailsUserRestAction({
        key: 'shipping',
        value: { shipping: shipping, address: address },
      })
    );
    const date = new Date();
    let time = date.getMinutes();
    if (time < 10) {
      time = '0' + String(time);
    }
    const detailsDate = {
      date: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      time: date.getHours() + ':' + time,
    };
    dispatch(
      addDitailsUserRestAction({ key: 'orderTime', value: detailsDate })
    );
    dispatch(
      addDitailsUserRestAction({ key: 'id_phoneNumber', value: phoneNamber })
    );
    setAdd(true);
  };
  useEffect(() => {
    if (add) {
      console.log('__________');
      dispatch(
        setDetailsDateStart({
          cash: fullOrderRest.obj.cash,
          shipping: fullOrderRest.obj.shipping,
          orderTime: fullOrderRest.obj.orderTime,
        })
      );
      setAddToWaitng(true);
    }
  }, [fullOrderRest.obj]);
  useEffect(() => {
    if (addToWaitng) {
      setAddToWaitng(false);
      dispatch(addOrderToArray(fullOrderRest.obj.orders));
    }
  }, [allOrders.newOBJRest.details.date.orderTime]);
  useEffect(() => {
    if (add) {
      setAdd(false);
      setAddress('');
      setPhoneNamber('');
      dispatch(postDataToArduinoThunk({}));
      dispatch(postFullOrderRestThunk());
      dispatch(postAllOrdersThunk());
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

  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {
              (fullOrderRest.obj.fullName !== ''
                ? fullOrderRest.obj.fullName
                : dispatch(
                    addDitailsUserRestAction({ key: 'fullName', value: 'לקוח' })
                  ),
              fullOrderRest.obj.fullName)
            }
          </h2>
        </div>
        <div
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
          style={{ display: 'flex' }}
        >
          <div
            className="bg-light py-8 px-4 shadow sm:rounded-lg sm:px-10"
            style={{ textAlign: 'start', width: '250px' }}
          >
            <div className="row">
              <div className="col">
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
                <h4>{`סכום כולל לתשלום :  ${totalSum1()}`}</h4>
                <button
                  className="btn btn-primary"
                  onClick={() => createOrder()}
                  disabled={fullOrderRest.obj.orders.length ? false : true}
                >
                  שלח לעבודה
                </button>

                <label htmlFor="shipping">משלוח</label>
                <input
                  {...register('shipping', {
                    onChange: (e) => {
                      setShipping(!shipping);
                    },
                  })}
                  id="shipping"
                  type="checkbox"
                  default={shipping}
                ></input>
                {fullOrderRest.obj.id_phoneNumber === '' ? (
                  <div>
                    <label htmlFor="phoneNumer">מספר טלפון:</label>
                    <input
                      type="number"
                      id="phoneNumber"
                      {...register('phoneNumber', {
                        required: 'חייב מספר טלפון',
                        maxLength: {
                          value: 2,
                          message: 'חייב מספר טלפון',
                        },
                        onChange: (e) => setPhoneNamber(e.target.value),
                      })}
                    ></input>
                  </div>
                ) : (
                  ''
                )}
                {shipping ? (
                  <div>
                    <label htmlFor="address">כתובת</label>
                    <input
                      type="input"
                      id="address"
                      {...register('address', {
                        required: 'חייב להיות כתובת למשלוח',
                        maxLength: {
                          value: 2,
                          message: 'חייב מספר טלפון',
                        },
                        onChange: (e) => {
                          setAddress(e.target.value);
                        },
                      })}
                    ></input>
                  </div>
                ) : (
                  ''
                )}

                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="col">
            <br />
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
                      Object.keys(fullOrderRest.obj.orders[i]).includes(
                        'business'
                      )
                    )
                      return (
                        <ProductTemplate
                          onClick={console.log(fullOrderRest.obj.orders[i])}
                          product={fullOrderRest.obj.orders[i]}
                          posArray={i}
                        />
                      );
                    return (
                      <CompleteOrdersTemplate
                        props={fullOrderRest.obj.orders[i]}
                        posArray={i}
                      />
                    );
                  })
                : ''}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartFullOrder;
