import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import BusinessName from '../../Features/Alerts/OrdersAlerts/BusinessName';

const BusinessTemplate = ({ product }) => {
  const dispatch = useDispatch();
  const [ditails, setDitails] = useState('');
  const [meat, setMeat] = useState('');
  const getMeat = () => {
    let st = '';
    console.log(product.obj);
    for (let i in product.obj.meat) {
      if (product.obj.meat[i].pos > 0) {
        st = i;
      }
    }
    console.log(st);
    setMeat(st);
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
  const handleAdding = () => {
    return <BusinessName />;
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
