import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setValuesByKey as setValuesByKeyAction } from '../redux/UsersReducers/employeeUser';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { clearState as clearStateAction } from '../redux/UsersReducers/userConnent';
import { userConnection as userConnectionThunk } from '../redux/UsersReducers/userConnent';
//import useHistory from 'history';
import toast from 'react-hot-toast';
import { add as addAction, listLocalS } from '../redux/UsersReducers/staffList';
const Login = () => {
  const dispatch = useDispatch();
  const employeeUser = useSelector((state) => state.employeeUser);
  const empConnect = useSelector((state) => state.userConnect);
  const staffList = useSelector((state) => state.staffList);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(userConnectionThunk(data));
  };
  useEffect(() => {
    let isExsit = false;
    if (empConnect.status === 'success' && empConnect.obj.name !== '') {
      for (let i in staffList.obj) {
        if (empConnect.obj.id === staffList.obj[i].id) {
          isExsit = true;
        }
      }
      if (isExsit) {
        alert('user alredy in staff!');
      } else {
        dispatch(addAction(Object.assign(empConnect.obj)));
        dispatch(clearStateAction());
      }
    }
  }, [empConnect]);
  /*useEffect(() => {
    if (window.localStorage.getItem('staffList')) {
      dispatch(
        listLocalS(JSON.parse(window.localStorage.getItem('staffList')))
      );
      console.log(JSON.parse(window.localStorage.getItem('staffList')));
    }
  }, []);*/
  console.log(staffList);
  const showMessage = (x) => {
    return (
      <div className="col">
        <div className="alert alert-warning">
          <strong>{x}!</strong>
          <a href="#" className="alert-link">
            {x}
          </a>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            כניסה למשמרת
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="mt-6">
              <div className="relative">
                <div className="relative flex justify-center text-sm">
                  <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-4" style={{ alignSelf: 'start' }}>
                          <h4 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            מספר פלא/ת.ז
                          </h4>
                          <input
                            key="phoneNumber"
                            type="number"
                            {...register('phoneNumber', {
                              required: '!חייב מספר פלא או ת.ז',
                            })}
                            name="phoneNumber"
                            id="phoneNumber"
                            style={{
                              width: '220px',
                              borderRadius: '12px',
                              textAlign: 'center',
                            }}
                          ></input>
                        </div>
                        {errors.phoneNumber &&
                          showMessage(errors.phoneNumber.message)}
                        <div className="p-3" style={{ alignSelf: 'center' }}>
                          <h4 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            סיסמה
                          </h4>
                          <input
                            key="password"
                            type="password"
                            {...register('password', {
                              required: 'חייב סיסמה!',
                            })}
                            name="password"
                            id="password"
                            style={{
                              width: '220px',
                              borderRadius: '12px',
                              textAlign: 'center',
                            }}
                          ></input>
                        </div>
                        {errors.password &&
                          showMessage(errors.password.message)}
                        <input
                          type="submit"
                          style={{
                            color: 'white',
                            alignSelf: 'center',
                            background: '#1a83ff',
                            textAlign: 'center',
                            border: ' 2px solid black',
                            borderRadius: ' 12px',
                            width: '220px',
                            height: '35px',
                          }}
                        />
                      </form>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
