import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditPrices = () => {
  const [typeFormat, setTypeFormat] = useState('AllProductOBJ');
  const [allFormats, setAllFormats] = useState([]);
  useEffect(async () => {
    const result = await axios.post(
      'http://localhost:3001/RestDataFormats_Obj',
      {
        type: typeFormat,
      }
    );
    setAllFormats(result.data);
  }, [typeFormat]);
  console.log(allFormats);
  return (
    <React.Fragment>
      <button onClick={() => setTypeFormat('AllProductOBJ')}>
        AllProductOBJ
      </button>
      <button onClick={() => setTypeFormat('OrdersOBJ')}>OrdersOBJ</button>
      {Object.keys(allFormats.obj ? allFormats.obj : []).map((item) => {
        if (item !== 'name')
          return (
            <table key={'tr' + item} className="table table-warning">
              <thead key={item}>
                <tr key={item}>
                  <th key={item}>
                    <h3>עריכת {item}</h3>
                  </th>
                </tr>
                <tr>
                  <th></th>

                  <th>ללא</th>
                  <th>מעט</th>
                  <th>עם</th>
                  <th>אקסטרה</th>
                  <th>בצד</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(allFormats.obj[item]).map((itemIn) => {
                  return (
                    <tr key={'tr' + itemIn}>
                      <th>{itemIn}</th>
                      {allFormats.obj[item][itemIn].prices.map((x) => {
                        return (
                          <td>
                            <input type="number" defaultValue={x}></input>
                          </td>
                        );
                      })}
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

export default EditPrices;
