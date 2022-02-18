import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../pages/RoutingApp/routingAppPages';
import { useSelector, useDispatch } from 'react-redux';
import {
  postEmployeeUserOBJ,
  setValuesByKey as setValuesByKeyAction,
} from '../../redux/UsersReducers/employeeUser';
import * as Icon from 'react-bootstrap-icons';
import './Navbar.css';
import { NavItems } from './SideBarData';
import { IconContext } from 'react-icons';

function logOut(dispatch) {
  let text = 'אתה בטוח שאתה רוצה להתנתק';
  if (window.confirm(text) === true)
    dispatch(setValuesByKeyAction({ key: 'firstName', value: '' }));
}
const NavbarApp = () => {
  const empolyeeUser = useSelector((state) => state.empolyeeUser);
  const fullOrder = useSelector((state) => state.fullOrder);
  const dispatch = useDispatch();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: '#060b26' }}>
        <div className="row" id="navbar">
          <div className="col" id="logoBar">
            <NavLink to="#" className="menu-bars">
              <Icon.List onClick={showSidebar}></Icon.List>
            </NavLink>

            {NavItems.map((item, index) => {
              if (index < 3)
                return (
                  <div key={item + ' ' + index} className="row">
                    <div className="col" onClick={() => setSidebar(false)}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <NavLink to={item.path}>
                        {item.icon}
                        {item.title}
                      </NavLink>
                      &nbsp;&nbsp;
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <NavLink to="#" className="menu-bars">
                <Icon.XCircle></Icon.XCircle>
              </NavLink>
            </li>
            {NavItems.map((item, index) => {
              if (index > 2)
                return (
                  <li key={index} className={item.cName}>
                    <NavLink to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default NavbarApp;

/*

<div className="sidenav">
  <div className="container nav_items">
    <div className="row">
      <NavLink to="/">Home</NavLink>
    </div>
    <div className="row">
      <NavLink to="/Login">Login</NavLink>
    </div>
    <div className="row">
      <NavLink to="/Menu">Menu</NavLink>
    </div>
    <div className="row">
      <NavLink to="/CreateUser">Create User</NavLink>
    </div>

    <div className="row">
      <NavLink onClick={() => logOut(dispatch)}>Logout</NavLink>
    </div>
  </div>
</div>
*/
/*
  <nav className="navbar navbar-expand-lg navbar bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
              /*user.obj.firstName === '' ? (
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
                <NavLink className="nav-link" to="/CalibrationTests">
                  בדיקת כיול&nbsp;
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
*/
