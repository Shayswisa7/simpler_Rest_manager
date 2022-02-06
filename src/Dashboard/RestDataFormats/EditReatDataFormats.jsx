import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const EditRestDataFormats = () => {
  const [typeFormat, setTypeFormat] = useState('AllProductOBJ');
  const [allFormats, setAllFormats] = useState([]);
  const [newName, setNewName] = useState('');
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

  const removeItem = (item, itemIn) => {
    const newArrNameFilter = Object.keys(allFormats.obj[item]).filter(
      (x) => x !== itemIn
    );
    let newObj = [];
    for (let i in newArrNameFilter) {
      newObj[newArrNameFilter[i]] = {
        ...allFormats.obj[item][newArrNameFilter[i]],
      };
    }
    allFormats.obj[item] = { ...newObj };
    setAllFormats({ ...allFormats });
  };
  const addItem = (item, value) => {
    console.log(Object.keys(allFormats.obj[item])[0]);
    allFormats.obj[item][value] =
      allFormats.obj[item][Object.keys(allFormats.obj[item])[0]];
    setAllFormats({ ...allFormats });
  };
  return (
    <React.Fragment>
      <button onClick={() => setTypeFormat('AllProductOBJ')}>
        AllProductOBJ
      </button>
      <br />
      <button onClick={() => setTypeFormat('OrdersOBJ')}>OrdersOBJ</button>
      {Object.keys(allFormats.obj ? allFormats.obj : []).map((item) => {
        if (item !== 'name')
          return (
            <table key={'tr' + item}>
              <thead key={item}>
                <tr key={item}>
                  <th key={item}>
                    <h3>עריכת {item}</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(allFormats.obj[item]).map((itemIn) => {
                  return (
                    <tr key={'tr' + itemIn}>
                      <th key={'th' + itemIn}>{itemIn}</th>
                      <th key={'ttr' + itemIn}>
                        <button
                          key={itemIn}
                          className="btn btn-warning"
                          onClick={() => removeItem(item, itemIn)}
                        >
                          X
                        </button>
                      </th>
                    </tr>
                  );
                })}
                <tr>
                  <th>
                    <h3>הוספת מוצר</h3>
                  </th>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setNewName(e.target.value)}
                    ></input>
                  </td>
                  <td>
                    <button onClick={() => addItem(item, newName)}>הוסף</button>
                  </td>
                </tr>
                <tr>
                  <td>_____________________________________________________</td>
                </tr>
              </tbody>
            </table>
          );
      })}
    </React.Fragment>
  );
};

export default EditRestDataFormats;
