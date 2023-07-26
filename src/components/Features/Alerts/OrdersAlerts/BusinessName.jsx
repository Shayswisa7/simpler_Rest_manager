import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderRest as addOrderRestAction } from '../../../../redux/HandleOrdersReducers/fullOrderRest';
import '../../CSS/BusinessName.css';
const BusinessName = ({ product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState('');
  const [business, setBusiness] = useState(product);
  const [busiNameSelected, setBusiNameSelected] = useState(false);
  const fullOrderRest = useSelector((state) => state.fullOrderRest);
  const onSubmit = (data) => {
    setBusiNameSelected(true);
    setDataState(data);
    setBusiness({ ...business, name: data.name });
  };
  console.log(business);
  useEffect(() => {
    console.log(dataState);
    if (busiNameSelected) {
      dispatch(addOrderRestAction(Object.assign(business)));
      setBusiNameSelected(false);
    }
  }, [business.name]);
  return (
    <React.Fragment>
      <div className="back">
        <div className="showInputName">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4>על שם מי המנה?</h4>
            <input
              {...register('name', {
                required: 'חייב לתת שם למנה',
                minLength: {
                  value: 2,
                  message: `השם קצר מידי `,
                },
              })}
            ></input>
            <input className="btn btn-danger" type="submit" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BusinessName;
