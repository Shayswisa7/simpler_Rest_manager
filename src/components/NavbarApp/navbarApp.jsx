import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../pages/routingAppPages';
import { useSelector, useDispatch } from 'react-redux';
import {
  postEmployeeUser,
  setValuesByKey as setValuesByKeyAction,
} from '../../redux/employeeUser';
import * as Icon from 'react-bootstrap-icons';
function logOut(dispatch) {
  let text = 'אתה בטוח שאתה רוצה להתנתק';
  if (window.confirm(text) === true)
    dispatch(setValuesByKeyAction({ key: 'firstName', value: '' }));
}
const NavbarApp = () => {
  const empolyeeUser = useSelector((state) => state.empolyeeUser);
  const fullOrder = useSelector((state) => state.fullOrder);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
              /*user.obj.firstName === '' ? (*/
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/CreateUser">
                    יצירת משתמש&nbsp;
                    <Icon.PersonLinesFill />
                  </NavLink>
                </li>
                <br />
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">
                    כניסה לחשבון&nbsp;
                    <Icon.PersonLinesFill />
                  </NavLink>
                </li>
                <NavLink
                  className="nav-link"
                  onClick={() => logOut(dispatch)}
                  to="/"
                >
                  יציאה
                  <Icon.DoorOpenFill />
                </NavLink>
              </ul>
            }
          </div>
          <div className="userAccount">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/UserPage">
                  עמוד משתמש&nbsp;
                  <Icon.PersonCircle />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Cart">
                  ({/*!fullOrder.obj.orders ? 0 : fullOrder.obj.orders.length*/}
                  )הזמנות&nbsp;
                  <Icon.InboxesFill />
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/Menu">
                  תפריט&nbsp;
                  <Icon.BookHalf />
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/">
                  בית&nbsp;
                  <Icon.HouseDoorFill />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavbarApp;
