import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Business from '../../components/Menu/Business/Business';
import CreateOrder from '../../components/Menu/CreateOrder/CreateOrder';
import SaveOrder from '../../components/Menu/SaveOrders/SaveOrders';
import CalibrationTests from '../calibrationTests';
import CreateUser from '../createUser';
import Home from '../home';
import Login from '../shiftLogIn';
import Menu from '../menu';
import NOTFOUND from '../notFound';
import StaffPage from '../staff';
import DashBoard from '../../Dashboard/dashBoard';
const AllRoutes = () => {
  return (
    <Routes>
      {' '}
      {/*Route of calibrationTests page.*/}
      <Route
        id="calibrationTests"
        path="/CalibrationTests"
        element={<CalibrationTests />}
      />
      {/*Route of createUser page.*/}
      <Route
        id="createUser"
        path="/CreateUser"
        element={<CreateUser />}
      ></Route>
      {/*Route of home page.*/}
      <Route id="home" path="/" element={<Home />} exact={true}></Route>
      {/*Route of login page.*/}
      <Route id="login" path="/Login" element={<Login />}></Route>
      {/*Route of menu page.*/}
      <Route id="menu" path="/Menu" element={<Menu />}></Route>
      {/*Route of userPage.*/}
      <Route id="staffPage" path="/StaffPage" element={<StaffPage />}></Route>
      {/*Route of userPage.*/}
      <Route id="dashboard" path="/Dashboard" element={<DashBoard />}></Route>
      {/*Route of userPage.*/}
      <Route
        id="createUser"
        path="/CreateUser"
        element={<CreateUser />}
      ></Route>
      {/*Route of menu pages.
    _______________________________________________________________________________
    */}
      {/*Route of business pages.*/}
      <Route
        id="business"
        path="/menu/business"
        element={<Business />}
        exact={true}
      />
      {/*Route of createOrder pages.*/}
      <Route
        id="createOrder"
        path="/menu/createOrder"
        element={<CreateOrder />}
      />
      {/*Route of saveOrder pages.*/}
      <Route id="saveOrder" path="/menu/saveOrder" element={<SaveOrder />} />
      {/*Route of NOTFOUND page.*/}
      <Route path="*" element={<NOTFOUND />} />
    </Routes>
  );
};
export default AllRoutes;
/* */
