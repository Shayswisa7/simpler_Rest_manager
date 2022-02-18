import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setValuesByKey as setValuesByKeyAction } from '../redux/UsersReducers/employeeUser';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  clearState as clearStateAction,
  logOut as logOutAction,
} from '../redux/UsersReducers/userConnent';
import { postUserLogOut as postUserLogOutThunk } from '../redux/UsersReducers/userConnent';
import { userConnection as userConnectionThunk } from '../redux/UsersReducers/userConnent';
//import useHistory from 'history';
import toast from 'react-hot-toast';
import { remove as removeAction } from '../redux/UsersReducers/staffList';
const LogOut = () => {
  const dispatch = useDispatch();
  const employeeUser = useSelector((state) => state.employeeUser);
  const empConnect = useSelector((state) => state.userConnect);
  const staffList = useSelector((state) => state.staffList);

  const [postData, setPostData] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(userConnectionThunk(data));
  };
  useEffect(() => {
    if (postData) {
      console.log(empConnect.obj.workTimes);
      dispatch(
        postUserLogOutThunk({
          id: empConnect.obj.id,
          workTimes: empConnect.obj.workTimes,
        })
      );
      console.log(empConnect.obj.workTimes);
      dispatch(clearStateAction());
      console.log(staffList.obj);
      window.localStorage.setItem('staffList', staffList.obj);
      setPostData(false);
    }
  }, [empConnect.status === 'success' ? empConnect.obj.workTimes.end : '']);
  useEffect(() => {
    if (empConnect.status === 'success') {
      let isExist = false;
      for (let i in staffList.obj) {
        console.log(staffList.obj[i].id === empConnect.obj.id);
        if (staffList.obj[i].id === empConnect.obj.id) {
          isExist = true;
        }
      }
      if (isExist) {
        dispatch(removeAction(empConnect.obj.id));
        dispatch(logOutAction());
        setPostData(true);
      } else {
        //show toast that say user is not in shift.
      }
    }
  }, [empConnect]);

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
            יציאה מהמשמרת
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
export default LogOut;
const Login1 = () => {
  //const user = useSelector((state) => state.user_reducer);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <br />
      <div
        className="container"
        style={{ border: '5px solid black', borderRadius: '12px' }}
      >
        <br />
        <h4
          style={{
            background: 'lightBlue',
            borderRadius: '12px',
            height: '150px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          !!!שלום לכניסה למשמרת אנא הכנס מספר פלא/ת.ז וסיסמה, משמרת נעימה
        </h4>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <div className="p-3" style={{ alignSelf: 'start' }}>
              <p className="fw-bold" style={{ textAlign: 'center' }}>
                מספר פלא/ת.ז
              </p>
              <input
                className="phoneNumber"
                type="phoneNumber"
                style={{
                  width: '220px',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}
              />
            </div>
            <div className="p-3" style={{ alignSelf: 'center' }}>
              <p className="fw-bold" style={{ textAlign: 'center' }}>
                סיסמה
              </p>
              <input
                className="password"
                type="password"
                style={{
                  width: '220px',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}
              />
            </div>
            <NavLink
              to="/"
              onClick={() =>
                //עדכון השרת

                console.log('בדיקה עם קיים במערכת')
              }
              style={{
                color: 'white',
                alignSelf: 'center',
                background: 'lightBlue',
                textAlign: 'center',
                border: ' 2px solid black',
                borderRadius: ' 12px',
                width: '220px',
                height: '35px',
              }}
            >
              go
            </NavLink>
            <br />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
