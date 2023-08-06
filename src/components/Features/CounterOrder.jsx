import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  decrement,
  increment,
  aside,
  incrementMeasure,
  decrementMeasure,
} from '../../redux/ItemsReducers/itemsInOrder';
const CounterOrder = (props) => {
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <button
        className="btn btn-warning"
        onClick={() =>
          dispatch(increment({ type: props.type, name: props.name }))
        }
      >
        יותר
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        className="btn btn-warning"
        onClick={() =>
          dispatch(decrement({ type: props.type, name: props.name }))
        }
      >
        פחות
      </button>
      {props.type === 'salads' || props.type === 'sauces' ? (
        <button
          className="btn btn-warning"
          onClick={() =>
            dispatch(aside({ type: props.type, name: props.name }))
          }
        >
          בצד
        </button>
      ) : (props.type === 'meat' || props.type === 'extras') &&
        itemsInOrder.obj[props.type][props.name].pos > 0 ? (
        <React.Fragment>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-warning"
            onClick={() =>
              dispatch(incrementMeasure({ type: props.type, name: props.name }))
            }
          >
            יותר שרוף
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-warning"
            onClick={() =>
              dispatch(decrementMeasure({ type: props.type, name: props.name }))
            }
          >
            יותר חי
          </button>
        </React.Fragment>
      ) : (
        <span />
      )}
    </React.Fragment>
  );
};

export default CounterOrder;
