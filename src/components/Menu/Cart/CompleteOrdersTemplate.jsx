import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeProducts as removeProductsAction } from '../../../redux/HandleOrdersReducers/fullOrderRest';
import './OrderTemplate.css';
import { allImages } from '../../../Images/importImags';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CompleteOrdersTemplate = ({ props, posArray }) => {
  const [ditails, setDitails] = useState('');
  const [drink, setDrink] = useState('');
  const [meat, setMeat] = useState('');
  const [extras, setExtras] = useState('');
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
    let st1 = '';
    for (let i in props.drink) {
      if (props.drink[i].pos > 0) {
        st1 = i;
      }
    }
    let st2 = '';
    for (let i in props.extras) {
      if (props.extras[i].pos > 0) {
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
                  <img
                    src={allImages[drink] ? allImages[drink] : ''}
                    style={{ height: 'auto', width: '80px' }}
                  ></img>
                  <img
                    src={allImages[meat] ? allImages[meat] : ''}
                    style={{ height: 'auto', width: '80px' }}
                  ></img>
                  <img
                    src={allImages[extras] ? allImages[extras] : ''}
                    style={{ height: 'auto', width: '80px' }}
                  ></img>
                </div>
              </div>
              {/*_______________________________________________ */}
              <div className="col" id="orderDitails">
                <div className="col">
                  <div className="row">
                    <div className="col" id="orderDitails">
                      <h3>שם:{props.name}</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" id="orderDitails">
                      <h3>שם מנה:{meat}</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" id="orderDitails">
                      <h3>מרכיבים:{ditails}...</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" id="orderDitails-edit">
                <button
                  className="btn btn-primary"
                  onClick={() => console.log(props)}
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
      <ToastContainer />
    </React.Fragment>
  );
};

export default CompleteOrdersTemplate;
