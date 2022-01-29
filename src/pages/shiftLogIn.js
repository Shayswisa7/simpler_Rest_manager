import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setValuesByKey as setValuesByKeyAction } from '../redux/employeeUser';
const Login = () => {
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
          !!!שלום להתחברות אנא הכנס מייל וסיסמה, שיהיה בתאבון
        </h4>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <div className="p-3" style={{ alignSelf: 'start' }}>
              <p className="fw-bold" style={{ textAlign: 'center' }}>
                מייל
              </p>
              <input
                className="mail"
                type="email"
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

export default Login;
