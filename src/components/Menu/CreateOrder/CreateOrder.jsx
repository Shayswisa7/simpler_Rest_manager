import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import CounterOrder from '../../Features/CounterOrder';
import { postItemsInOrders as postItemsInOrdersThunk } from '../../../redux/ItemsReducers/itemsInOrder';
import { setValues as setValuesAction } from '../../../redux/ItemsReducers/itemsInOrder';
import {
  addDitailsUserRest as addDitailsUserRestAction,
  addOrderRest as addOrderRestAction,
} from '../../../redux/HandleOrdersReducers/fullOrderRest';
import { allImages } from '../../../Images/importImags';
import { useState } from 'react';
import { useEffect } from 'react';
const CreateOrder = () => {
  //Selector Hook
  const itemsInOrder = useSelector((state) => state.itemsInOrder); //useSelector((state) => state.itemsInOrder);
  const fullOrder = useSelector((state) => state.fullOrder); //useSelector((state) => state.fullOrder);
  const fullOrderRest = useSelector((state) => state.fullOrderRest);
  //Dispath Hook
  const dispatch = useDispatch();

  //Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //Arrays hebreow strings
  const heSalads = ['ללא', 'מעט', 'עם', 'אקסטרה', 'בצד'];
  const heMeat = [];
  const heBrads = [];

  //UseState
  //Submit
  const [submit, setSubmit] = useState(false);
  //Name Order
  const [nameOrder, setNameOrder] = useState('');
  //Cash
  const [cash, setCash] = useState(false);
  //Save Order
  const [save, setSave] = useState(false);
  //

  const addToFullOrderRest = () => {};
  //OnSubmit
  const onSubmit = (data) => {
    //if the user clicked onSubmit. for filter renders of form
    if (submit) {
      dispatch(setValuesAction({ key: 'cash', value: cash }));
      dispatch(setValuesAction({ key: 'name', value: nameOrder }));
      dispatch(postItemsInOrdersThunk());
      setNameOrder('');
      setCash(false);
      setSave(false);
    }
    setSubmit(false);
  };
  useEffect(() => {
    if (submit) {
      dispatch(addOrderRestAction(Object.assign(itemsInOrder.obj)));
      if (fullOrderRest.obj.fullName === 'לקוח') {
        dispatch(
          addDitailsUserRestAction({
            key: 'fullName',
            value: itemsInOrder.obj.name,
          })
        );
      }
    }
  }, [itemsInOrder.obj.name]);
  console.log(fullOrderRest.obj);
  return (
    <React.Fragment>
      <div className="container">
        <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nameOrder"> שם המנה</label>
          &nbsp; &nbsp;
          <input
            {...register('nameOrder', {
              required: 'חייב שם להזמנה',
              onChange: (e) => {
                setNameOrder(e.target.value);
              },
            })}
            value={nameOrder}
            type="input"
            id="nameOrder"
          ></input>
          &nbsp; &nbsp; &nbsp;
          <input
            {...register('cash', {
              onChange: () => setCash(!cash),
            })}
            checked={cash}
            type="checkbox"
            id="cash"
          ></input>
          <label htmlFor="cash">תשלום באשראי</label>
          &nbsp; &nbsp;
          <input
            {...register('save', {
              onChange: () => setSave(!save),
            })}
            checked={save}
            type="checkbox"
            id="save"
          ></input>
          <label htmlFor="save">שמור מנה</label>
          {Object.keys(itemsInOrder.obj ? itemsInOrder.obj : []).map(
            (item, key) => {
              if (item !== 'name' && item !== 'cash' && item !== 'remarks')
                return (
                  <table key={item} className="table table-warning">
                    <thead>
                      <tr>
                        <th>{item}</th>
                        <th>מצב</th>
                        {item === 'meat' || item === 'exstras' ? (
                          <th>מידת עשייה</th>
                        ) : (
                          <th></th>
                        )}
                        <th>בחר</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(
                        itemsInOrder.obj[item] ? itemsInOrder.obj[item] : []
                      ).map((item1, key1) => {
                        return (
                          <tr key={item1 + '1'}>
                            <td>
                              <img
                                src={allImages[item1]}
                                style={{ height: 'auto', width: '80px' }}
                              ></img>
                            </td>
                            <td>{item1}</td>
                            <td>
                              {heSalads[itemsInOrder.obj[item][item1].pos]}
                            </td>
                            {item === 'meat' || item === 'extras' ? (
                              itemsInOrder.obj[item][item1].pos > 0 ? (
                                <th>{itemsInOrder.obj[item][item1].measure}</th>
                              ) : (
                                <th />
                              )
                            ) : (
                              <th />
                            )}
                            <td>
                              <CounterOrder type={item} name={item1} />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                );
            }
          )}
          <input
            {...register('remarks', {
              onChange: (e) => {
                console.log(e.target.value);
              },
            })}
            id="remarks"
            type="textBox"
            label="remarks"
            style={{
              width: '120px',
              height: '100px',
              textAlign: 'right',
              borderRadius: '6px',
            }}
          ></input>
          <label htmlFor="remarks">:הערות</label>
          <input
            className="btn btn-primary"
            type="submit"
            onClick={() => setSubmit(true)}
          ></input>
        </form>
      </div>
    </React.Fragment>
  );
};
export default CreateOrder;
