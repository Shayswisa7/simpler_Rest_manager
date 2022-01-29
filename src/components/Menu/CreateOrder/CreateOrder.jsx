import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import Counter from '../../Features/counter';
import { setValuesByKey } from '../../../redux/employeeUser';
import { setValues as setValuesAction } from '../../../redux/itemsInOrder';
import { NavLink } from 'react-router-dom';
import { addOrder as addOrderAction } from '../../../redux/fullOrderClient';
import { useState } from 'react';
import { Link } from 'react-bootstrap-icons';
import { useEffect } from 'react';
const CreateOrder = () => {
  const itemsInOrder = useSelector((state) => state.itemsInOrder); //useSelector((state) => state.itemsInOrder);
  const fullOrder = useSelector((state) => state.fullOrder); //useSelector((state) => state.fullOrder);
  const dispatch = useDispatch();
  /*console.log('useState item in order', order, '-------');
  console.log('useState item in full order', fOrder, '-------');*/
  let categoryNameArray = [];
  for (let i in itemsInOrder.obj) {
    if (i !== 'name') categoryNameArray.push(i);
  }
  const getNames = (i) => {
    let itemsNamesArray = [];
    for (let j in itemsInOrder.obj[i]) {
      if (i !== 'name') itemsNamesArray.push(j);
    }
    return itemsNamesArray;
  };
  //show alert with imput.
  useEffect(() => {}, []);
  const handelSubmit = () => {
    dispatch(
      setValuesAction({
        key: 'name',
        value: document.getElementById('nameOrder').value,
      })
    );
  };
  return (
    <React.Fragment>
      <div className="container">
        <input type="input" id="nameOrder"></input>
        <label>שם המנה</label>
        {categoryNameArray.map((cName) => (
          <table key={`table_${cName}`} className="">
            <thead></thead>
            <tbody>
              <tr>
                <th>{cName}</th>
                <th>מחיר</th>
                <th>מצב</th>
              </tr>
              {getNames(cName).map((iName) => (
                <tr key={iName}>
                  <td>{iName}</td>
                  <td>
                    {
                      itemsInOrder.obj[cName][iName].prices[
                        itemsInOrder.obj[cName][iName].pos
                      ]
                    }
                  </td>
                  <td>{itemsInOrder.obj[cName][iName].pos}</td>
                  <td>
                    <Counter key={iName} type={cName} name={iName}></Counter>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </React.Fragment>
  );
};
export default CreateOrder;
