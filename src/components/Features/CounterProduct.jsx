import React from 'react';
import {
  increment as incrementProductAction,
  decrement as decrementProductAction,
} from '../../redux/ItemsReducers/allProducts';
import { useDispatch } from 'react-redux';
const CounterProduct = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <button
        className="btn btn-warning"
        onClick={() =>
          dispatch(
            incrementProductAction({ type: props.type, name: props.name })
          )
        }
      >
        יותר
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        className="btn btn-warning"
        onClick={() =>
          dispatch(
            decrementProductAction({ type: props.type, name: props.name })
          )
        }
      >
        פחות
      </button>
    </React.Fragment>
  );
};

export default CounterProduct;
