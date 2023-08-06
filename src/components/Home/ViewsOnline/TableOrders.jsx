import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TableOrders = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders);

  const [arrayDetails, setArrayDetaile] = useState([]);
  const createArr = () => {
    const online = Object.assign(allOrders.queArrObjOnline);
    console.log(online);
    let arr = [];
    for (let i in online) {
      let fullPrice = 0;
      console.log(online[i]);
      for (let j in online[i].obj.details.itemsAndPrices) {
        fullPrice += online[i].obj.details.itemsAndPrices[j].sumPrice;
      }
      console.log(i);
      const detailsForWorker = {
        phone: online[i].obj.details.userPhoneNumber,
        sumServing: online[i].obj.details.itemsAndPrices.length,
        shipping: online[i].obj.details.date.shipping.address,
        time: online[i].obj.details.date.orderTime.time,
        fullPrice: fullPrice,
      };
      arr.push(detailsForWorker);
    }
    setArrayDetaile(arr);
    console.log(arrayDetails);
  };
  console.log(arrayDetails);
  useEffect(() => {
    createArr();
  }, []);
  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">טל' הזמנה:</th>
              <th scope="col">כמות מנות</th>
              <th scope="col">משולח</th>
              <th scope="col">זמן הזמנה</th>
              <th scope="col">מחיר</th>
              <th scope="col">מחיקה</th>
            </tr>
          </thead>
          <tbody>
            {console.log(arrayDetails, '__________')}
            {arrayDetails.map((x) => {
              console.log(x);
              return (
                <tr>
                  <td>{x.phone}</td>
                  <th scope="row">{x.sumServing}</th>
                  <td>{x.shipping}</td>
                  <td>{x.time}</td>
                  <td>{x.fullPrice}</td>
                  <td>
                    <button className="btn btn-danger">ביטול הזמנה</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h2
          style={{
            float: 'right',
            border: 'solid out  8px',
            borderRadius: '5px',
            backgroundColor: 'gray',
          }}
        >
          בעבודה:
        </h2>
      </div>
    </React.Fragment>
  );
};

export default TableOrders;
