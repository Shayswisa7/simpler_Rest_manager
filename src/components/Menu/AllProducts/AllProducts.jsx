import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../../Features/counter';

const AllProducts = () => {
  //useSelector((state) => state.itemsInOrder);
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const allProducts = useSelector((state) => state.allProducts);
  const [register, handelf] = useForm();
  console.log(allProducts);
  return (
    <React.Fragment>
      {Object.keys(allProducts.obj).map((item, inedx) => {
        if (item !== 'name')
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
                  <th>מחיר</th>
                  <th>כמות</th>
                  <th>X</th>
                </tr>
                {Object.keys(allProducts.obj[item]).map((type, index) => {
                  return (
                    <tr key={index + 'tr1'}>
                      <td>{type}</td>
                      <td>{allProducts.obj[item][type].prices[1]}</td>
                      <td>{allProducts.obj[item][type].pos}</td>
                      <td>
                        <Counter />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
      })}
    </React.Fragment>
  );
};

export default AllProducts;
