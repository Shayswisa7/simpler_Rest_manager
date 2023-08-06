import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postEmployeeUserCreateUser as postEmployeeUserCreateUserThunk } from '../redux/UsersReducers/employeeUser';
import { setObj as setObjAction } from '../redux/UsersReducers/employeeUser';
const CreateUser = () => {
  const employeeUser = useSelector((state) => state.employeeUser);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const setSubmit = () => setIsSubmit(!isSubmit);
  const [isSubmit, setIsSubmit] = useState(false);
  let itemsOfNewUserArray = [];
  for (let i in employeeUser.obj) {
    if (i !== 'workTimes') itemsOfNewUserArray.push(i);
    if (i === 'password') itemsOfNewUserArray.push(i + 'Confirmation');
  }
  let i = 0;
  const he = [
    'שם פרטי',
    'שם משפחה',
    'תפקיד',
    'ת.ז',
    'פלאפון',
    'מייל',
    'מספר בנק',
    'גיל',
    'סיסמה',
    'אישור סיסמה',
    'שכר שעתי',
  ];
  let sumPass = 0;
  let sumRol = 0;
  const showMessage = (err) => {
    return (
      <div className="col-4">
        <div className="alert alert-warning">
          <strong>{he[i - 1]}!</strong>
          <a href="#" className="alert-link">
            {err}
          </a>
        </div>
      </div>
    );
  };
  const onSubmit = (data) => {
    window.localStorage.setItem('empUser', JSON.stringify(data));
    dispatch(setObjAction(data));
    setSubmit();
  };
  if (isSubmit) {
    dispatch(postEmployeeUserCreateUserThunk(employeeUser.obj));
    setSubmit();
  }
  console.log(employeeUser);
  const [obj, setObj] = useState(null);
  useEffect(() => {
    if (window.localStorage.getItem('empUser')) {
      const e = window.localStorage.getItem('empUser');
      setObj(JSON.parse(e));
    }
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit(onSubmit)}>
            {employeeUser.status === 'success'
              ? itemsOfNewUserArray.map((x) =>
                  x !== 'phoneNumber' &&
                  x !== 'password' &&
                  x !== 'email' &&
                  x !== 'passwordConfirmation' &&
                  x !== 'rol' &&
                  x ? (
                    (console.log('______________', x),
                    (
                      <div key={x + 'row'} className="row">
                        <div
                          key={x + 'col'}
                          className="col-2"
                          style={{ height: '60px' }}
                        >
                          <input
                            key={x}
                            type="text"
                            {...register(x, {
                              required: 'חייב שיהיה ' + he[i],
                              minLength: {
                                value: 2,
                                message: `${he[i]} קצר מידי `,
                              },
                              maxLength: {
                                value: 25,
                                message: `${he[i]} קצר מידי`,
                              },
                            })}
                            defaultValue={obj ? obj[x] : ''}
                            placeholder={he[i++]}
                            name={x}
                            id={x}
                          ></input>
                        </div>
                        {errors[x] && showMessage(errors[x].message)}
                      </div>
                    ))
                  ) : x !== 'passwordConfirmation' &&
                    x !== 'password' &&
                    x !== 'rol' ? (
                    (console.log('______________', x),
                    (
                      <div key={x + 'row'} className="row">
                        <div
                          key={x + 'col'}
                          className="col-2"
                          style={{ height: '60px' }}
                        >
                          <input
                            key={x}
                            type={x}
                            {...register(
                              x,
                              { required: 'חייב שיהיה ' + he[i] },
                              {
                                minLength: {
                                  value: 8,
                                  message: `${he[i]} קצר מידי 8`,
                                },
                                maxLength: {
                                  value: 30,
                                  message: `${he[i]} קצר מידי`,
                                },
                              }
                            )}
                            defaultValue={obj ? obj[x] : ''}
                            placeholder={he[i++]}
                            name={x}
                            id={x}
                          ></input>
                        </div>
                        {errors[x] && showMessage(errors[x].message)}
                      </div>
                    ))
                  ) : x === 'rol' && sumRol++ < 1 && x ? (
                    (console.log('______________', he[i++]),
                    (
                      <div key={x + 'row'} className="row">
                        <div
                          key={x + 'col'}
                          className="col-2"
                          style={{ height: '60px' }}
                        >
                          <select {...register('rol')}>
                            <option value="menager">מנהל</option>
                            <option value="leader">אחראי</option>
                            <option value="worker">עובד</option>
                          </select>
                        </div>
                        {errors[x] && showMessage(errors[x].message)}
                      </div>
                    ))
                  ) : sumPass++ < 2 && x ? (
                    <div key={x + 'row'} className="row">
                      <div
                        key={x + 'col'}
                        className="col-2"
                        style={{ height: '60px' }}
                      >
                        <input
                          key={x}
                          type="password"
                          {...register(x, {
                            required: 'חייב שיהיה ' + he[i],
                            minLength: {
                              value: 8,
                              message: `${he[i]} קצרה מידי הסיסמה אמורה להכיל 8-12 תווים`,
                            },
                            maxLength: {
                              value: 12,
                              message: `${he[i]} ארוכה מידי הסיסמה אמורה להכיל 8-12 תווים`,
                            },
                          })}
                          defaultValue={obj ? obj[x] : ''}
                          placeholder={he[i++]}
                          name={x}
                          id={x}
                        ></input>
                      </div>
                      {errors[x] && showMessage(errors[x].message)}
                    </div>
                  ) : (
                    ''
                  )
                )
              : ''}

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;

/*

















    <form onSubmit={handleSubmit(onSubmit)}>
      <div key="firstName">
        <input
          key="firstName"
          type="text"
          placeholder="שם פרטי"
          name="firstName"
          id="firstName"
          ref={register()}
        ></input>
      </div>
      <div key="lastName">
        <input
          key="lastName"
          type="text"
          placeholder="שם משפחה"
          name="lastName"
          id="lastName"
          ref={register()}
        ></input>
      </div>
      <div key="rol">
        <input
          key="rol"
          type="text"
          placeholder={he[i++]}
          name="rol"
          id="rol"
          ref={register()}
        ></input>
      </div>
      <div key="id">
        <input
          key="id"
          type="text"
          placeholder={he[i++]}
          name="id"
          id="id"
          ref={register()}
        ></input>
      </div>
      <div key="phoneNumber">
        <input
          key="phoneNumber"
          type="phoneNumber"
          placeholder={he[i++]}
          name="phoneNumber"
          id="phoneNumber"
          ref={register()}
        ></input>
      </div>
      <div key="email">
        <input
          key="email"
          type="email"
          placeholder={he[i++]}
          name="email"
          id="email"
          ref={register()}
        ></input>
      </div>
      <div key="bank">
        <input
          key="bank"
          type="text"
          placeholder={he[i++]}
          name="bank"
          id="bank"
          ref={register()}
        ></input>
      </div>
      <div key="age">
        <input
          key="age"
          type="text"
          placeholder={he[i++]}
          name="age"
          id="age"
          ref={register()}
        ></input>
      </div>
      <div key="password">
        <input
          key="password"
          type="password"
          placeholder={he[i++]}
          name="password"
          id="password"
          ref={register()}
        ></input>
      </div>
      <div key="passwordConfirmation">
        <input
          key="passwordConfirmation"
          type="password"
          placeholder={he[i++]}
          name="passwordConfirmation"
          id="passwordConfirmation"
          ref={register()}
        ></input>
      </div>
      <div key="hourlyWage">
        <input
          key="hourlyWage"
          type="text"
          placeholder={he[i++]}
          name="hourlyWage"
          id="hourlyWage"
          ref={register()}
        ></input>
      </div>

      <button type="submit">הירשם</button>
    </form>
    */
