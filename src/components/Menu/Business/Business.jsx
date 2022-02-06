import React from 'react';
import Counter from '../../Features/counter';
import { useDispatch, useSelector } from 'react-redux';

const Business = () => {
  const allProducts = useSelector((state) => state.allProducts);
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
export default Business;
