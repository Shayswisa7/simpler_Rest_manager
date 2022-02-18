import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount as incrementByAmountAction } from '../../../redux/ItemsReducers/allProducts';
import { postAllProducts as postAllProductsThunk } from '../../../redux/ItemsReducers/allProducts';
import {
  addProducts as addProductsAction,
  removeProducts as removeProductsAction,
} from '../../../redux/HandleOrdersReducers/fullOrderRest';
import CounterProduct from '../../Features/CounterProduct';

const AllProducts = () => {
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const fullOrderRest = useSelector((state) => state.fullOrderRest);
  const allProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //UseState
  //Submit
  const [submit, setSubmit] = useState(false);
  //Name Order
  const [nameOrder, setNameOrder] = useState('');
  //Cash
  const [removeFromArray, setRemoveFromArray] = useState(false);
  //Save Order
  const [save, setSave] = useState(false);
  const [ordersKey, setOrdersKey] = useState(-1);
  const ordersKey1 = -1;
  const onSubmit = async (data) => {
    for (let i in fullOrderRest.obj.orders)
      if (
        Object.keys(fullOrderRest.obj.orders[i]).includes('business') &&
        ordersKey === -1
      ) {
        setOrdersKey(Number(i));
      }
    console.log(ordersKey);
    if (submit) {
      if (ordersKey !== -1) {
        const products = Object.assign(fullOrderRest.obj.orders[ordersKey]);
        console.log(products);
        dispatch(removeProductsAction(ordersKey));
        for (let i in products) {
          if (i !== 'business') {
            for (let j in products[i]) {
              if (products[i][j].pos !== 0) {
                console.log(products[i][j].pos);
                dispatch(
                  incrementByAmountAction({
                    type: i,
                    name: j,
                    amount: products[i][j].pos,
                  })
                );
              }
            }
          }
        }
      }
      console.log(fullOrderRest);
      setSubmit(true);
      setSave(!save);
    }
  };
  useEffect(() => {
    /* console.log(ordersKey, removeFromArray);
    if (removeFromArray) dispatch(removeProductsAction(ordersKey));
    console.log(fullOrderRest);
    setRemoveFromArray(false);removeFromArray*/
  }, []);
  useEffect(() => {
    if (submit) {
      dispatch(addProductsAction(Object.assign(allProducts.obj)));
      dispatch(postAllProductsThunk());
      setSubmit(false);
    }
  }, [save]);
  //console.log('|', fullOrderRest);
  return (
    <React.Fragment>
      <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(allProducts.obj).map((item, inedx) => {
          if (item !== 'name' && item !== 'business')
            return (
              <table
                key={item}
                className="table table"
                style={{ width: '450px' }}
              >
                <thead>
                  <tr>
                    <th>
                      <h3>{item}</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-warning">
                    <th>סוג</th>
                    <th>קטן</th>
                    <th>גדול</th>
                    <th>כמות</th>
                    <th>X</th>
                  </tr>
                  {Object.keys(allProducts.obj[item]).map((type, index) => {
                    return (
                      <tr key={index + 'tr1'}>
                        <td>{type}</td>
                        {allProducts.obj[item][type].prices.map((item1, i) => {
                          return (
                            <td
                              key={i}
                              style={
                                allProducts.obj[item][type].posSize === i
                                  ? { color: 'red' }
                                  : {}
                              }
                            >
                              {item1}
                            </td>
                          );
                        })}
                        <td>{allProducts.obj[item][type].pos}</td>
                        <td>
                          <CounterProduct type={item} name={type} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            );
        })}
        <input type="submit" onClick={() => setSubmit(true)} />
      </form>
    </React.Fragment>
  );
};

export default AllProducts;
