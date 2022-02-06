import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../pages/RoutingApp/routingAppPages';

import * as Icon from 'react-bootstrap-icons';

const NavbarMenu = () => {
  return (
    <React.Fragment>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-19">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu/createOrder">
                  צור מנה&nbsp;
                  <Icon.PersonCircle />
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/menu/saveOrder">
                  המנות שלך&nbsp;
                  <Icon.BookHalf />
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/menu/business">
                  מנות הבית&nbsp;
                  <Icon.HouseDoorFill />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavbarMenu;
