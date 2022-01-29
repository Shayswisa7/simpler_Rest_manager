import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';

const CreateUser = () => {
  /*const axios = require('axios');
  const user = useSelector((state) => state.user_reducer);
  const dispatch = useDispatch();*/

  return (
    <form action="">
      <div className="container">
        <div>
          <label htmlFor="userName">שם פרטי</label>
          <br />
          <input type="text" name="userName" id="userName"></input>
        </div>
        <div>
          <label htmlFor="userName">שם משפחה</label>
          <br />
          <input type="text" name="userName" id="userName"></input>
        </div>
        <div>
          <label htmlFor="phoneNumber">טלפון</label> <br />
          <input type="number" name="phoneNumber" id="phoneNumber"></input>
        </div>
        <div>
          <label htmlFor="email">מייל</label> <br />
          <input type="email" name="email" id="email"></input>
        </div>
        <div>
          <label htmlFor="password">סיסמה</label> <br />
          <input type="password" name="password" id="password"></input>
        </div>
        <div>
          <label htmlFor="password1">אישור סיסמה</label> <br />
          <input type="password" name="password1" id="password1"></input>
        </div>
        <button type="submit">הירשם</button>
      </div>
    </form>
  );
};

export default CreateUser;
