import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProducts as removeProductsAction } from '../../../redux/HandleOrdersReducers/fullOrderRest';
import './OrderTemplate.css';
const ProductsTemplate = ({ product, posArray }) => {
  const [ditails, setDitails] = useState('');
  const dispatch = useDispatch();
  const fullOrderRest = useSelector((state) => state.fullOrderRest);
  const getDitails = () => {
    let st = '';
    let count = 0;
    for (let i in product) {
      for (let j in product[i])
        if (product[i][j].pos != 0) {
          count++;
          if (count <= 3) st += `${j}(${product[i][j].pos}) ,`;
        }
    }
    setDitails(st);
  };
  const handleDelete = () => {
    dispatch(removeProductsAction(Number(posArray)));
  };
  useEffect(() => {
    getDitails();
  }, []);
  console.log(fullOrderRest);
  return (
    <React.Fragment>
      <div className="container">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-light py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="row" id="rowOrder">
              {/*_______________________________________________ */}
              <div className="col" id="orderImage">
                <div className="row">
                  <div>X</div>
                  <div>X</div>
                  <div>X</div>
                </div>
              </div>
              {/*_______________________________________________ */}
              <div className="col" id="orderDitails">
                <div className="col">
                  <div className="row">
                    <div className="col" id="orderDitails">
                      סל מוצרים:
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" id="orderDitails">
                      בסל:{ditails}...
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" id="orderDitails-edit">
                <button className="btn btn-primary">ערוך</button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete()}
                >
                  הסר
                </button>
              </div>
              {/*_______________________________________________ */}
            </div>
          </div>
        </div>
      </div>
      <br />
    </React.Fragment>
  );
};

export default ProductsTemplate;
