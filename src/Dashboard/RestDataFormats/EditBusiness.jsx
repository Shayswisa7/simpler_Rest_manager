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
  return <React.Fragment></React.Fragment>;
};
