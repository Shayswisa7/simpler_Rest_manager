import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import BusinessName from '../../Features/Alerts/OrdersAlerts/BusinessName';
import { allImages } from '../../../Images/importImags';
const BusinessTemplate = ({ product }) => {
  const dispatch = useDispatch();
  const [ditails, setDitails] = useState('');
  const [drink, setDrink] = useState('');
  const [meat, setMeat] = useState('');
  const [extras, setExtras] = useState('');
  const getMeat = () => {
    let st = '';
    console.log(product.obj);
    for (let i in product.obj.meat) {
      if (product.obj.meat[i].pos > 0) {
        st = i;
      }
    }
    let st1 = '';
    for (let i in product.obj.drink) {
      if (product.obj.drink[i].pos > 0) {
        st1 = i;
      }
    }
    let st2 = '';
    for (let i in product.obj.extras) {
      if (product.obj.extras[i].pos > 0) {
        st2 = i;
      }
    }
    console.log(st);
    setDrink(st1);
    setMeat(st);
    setExtras(st2);
  };
  const getDitails = () => {
    let st = '';
    let count = 0;
    for (let i in product.obj.salads) {
      if (product.obj.salads[i].pos != 0) {
        count++;
        if (count <= 3) st += i + ' ,';
      }
    }
    setDitails(st);
  };

  useEffect(() => {
    getMeat();
    getDitails();
  }, []);
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
                  {allImages[meat] ? (
                    <img
                      src={allImages[meat]}
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
                      שם:{}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" id="orderDitails">
                      שם מנה:{meat}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" id="orderDitails">
                      מרכיבים:{ditails}...
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" id="orderDitails-edit">
                <BusinessName product={product.obj} />
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

export default BusinessTemplate;
