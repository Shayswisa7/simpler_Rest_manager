import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OnlineOrders from '../components/Home/ViewsOnline/OnlineOrders';
import TableOrders from '../components/Home/ViewsOnline/TableOrders';
const Home = () => {
  //const itemsInOrder = useSelector((state) => state.items_in_order);

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <TableOrders />
      <OnlineOrders />
      {/* <table style={{ width: '100%' }}>
        <thead>
          <tr className="text-center" style={{ backgroundColor: 'lightGreen' }}>
            <th className="text-center">My Pics</th>
          </tr>
          <tr>
            <th className="text-center">Trees</th>
            <th className="text-center">Cats</th>
            <th className="text-center">Bulding</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">d</td>
            <td className="text-center">d</td>
            <td className="text-center">d</td>
          </tr>
        </tbody>
      </table> */}
    </React.Fragment>
  );
};

export default Home;
