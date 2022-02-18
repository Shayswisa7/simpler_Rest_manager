import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeProducts as removeProductsAction } from '../../../redux/HandleOrdersReducers/fullOrderRest';
import './OrderTemplate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ComplexOrdersTemplate = ({ props, posArray }) => {
  const [ditails, setDitails] = useState('');
  const [meat, setMeat] = useState('');
  const dispatch = useDispatch();
  const notifyIsSuccess = () => toast('hellow!');

  console.log(props);
  const getMeat = () => {
    let st = '';
    console.log(props);
    for (let i in props.meat) {
      if (props.meat[i].pos > 0) {
        st = i;
      }
    }
    console.log(st);
    setMeat(st);
  };
  const getDitails = () => {
    let st = '';
    let count = 0;
    for (let i in props.salads) {
      if (props.salads[i].pos != 0) {
        count++;
        if (count <= 3) st += i + ' ,';
      }
    }
    setDitails(st);
  };
  const handleDelete = () => {
    dispatch(removeProductsAction(Number(posArray)));
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
                      שם:{props.name}
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
      <ToastContainer />
    </React.Fragment>
  );
};

export default ComplexOrdersTemplate;
