import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProducts as removeProductsAction } from '../../../redux/HandleOrdersReducers/fullOrderRest';
import './OrderTemplate.css';
import { allImages } from '../../../Images/importImags';
const ProductsTemplate = ({ product, posArray }) => {
  const [ditails, setDitails] = useState('');
  const dispatch = useDispatch();
  const fullOrderRest = useSelector((state) => state.fullOrderRest);
  const [drink, setDrink] = useState('');
  const [desserts, setDesserts] = useState('');
  const [extras, setExtras] = useState('');
  const getDesserts = () => {
    let st = '';
    console.log(product);
    for (let i in product.desserts) {
      if (product.desserts[i].pos > 0) {
        st = i;
      }
    }
    let st1 = '';
    for (let i in product.drink) {
      if (product.drink[i].pos > 0) {
        st1 = i;
      }
    }
    let st2 = '';
    for (let i in product.extras) {
      if (product.extras[i].pos > 0) {
        st2 = i;
      }
    }
    console.log(st);
    setDrink(st1);
    setDesserts(st);
    setExtras(st2);
  };
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
    getDesserts();
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
                <div
                  className="row"
                  style={{
                    backgroundColor: 'rgb(255, 196, 69)',
                    border: 'solid rgb(255, 196, 69) 1px',
                    borderRadius: '4px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'start',
                    flexWrap: 'wrap',
                  }}
                >
                  {allImages[drink] ? (
                    <img
                      src={allImages[drink]}
                      style={{ height: 'auto', width: '150px', height: '80px' }}
                    ></img>
                  ) : (
                    ''
                  )}
                  {allImages[extras] ? (
                    <img
                      src={allImages[extras]}
                      style={{
                        height: 'auto',
                        width: '125px',
                        height: '80px',
                      }}
                    ></img>
                  ) : (
                    ''
                  )}
                  {allImages[desserts] ? (
                    <img
                      src={allImages[desserts]}
                      style={{ height: 'auto', width: '125px', height: '80px' }}
                    ></img>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              {/*_______________________________________________ */}
              <div className="col" id="orderDitails">
                <div className="col">
                  <div className="row">
                    <div className="col" id="orderDitails">
                      <h3>סל מוצרים:</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" id="orderDitails">
                      <h3>בסל:{ditails}...</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" id="orderDitails-edit">
                <button
                  className="btn btn-primary"
                  onClick={() => console.log(product)}
                >
                  הצג
                </button>
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
