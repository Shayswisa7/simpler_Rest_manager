import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { decrement, increment, aside } from '../../redux/itemsInOrder';
var ButtonPlus = styled.button`
  background: lightGreen;
`;
var ButtonMinus = styled.button`
  background: red;
`;
var ButtonAside = styled.button`
  background: yellow;
`;
const Counter = (props) => {
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <ButtonPlus
        onClick={() =>
          dispatch(increment({ type: props.type, name: props.name }))
        }
      >
        +
      </ButtonPlus>
      <ButtonMinus
        onClick={() =>
          dispatch(decrement({ type: props.type, name: props.name }))
        }
      >
        -
      </ButtonMinus>
      {props.type === 'salads' || props.type === 'sauces' ? (
        <ButtonAside
          onClick={() =>
            dispatch(aside({ type: props.type, name: props.name }))
          }
        >
          בצד
        </ButtonAside>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default Counter;
