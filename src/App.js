import './CSS/App.css';
import AllRoutes from './pages/RoutingApp/routingAppPages';
import NavBarApp from './components/NavbarApp/navbarApp';
import { useDispatch, useSelector } from 'react-redux';
import { postItemsInOrders as postItemsInOrdersThunk } from './redux/ItemsReducers/itemsInOrder';
import { postEmployeeUserOBJ as postEmployeeUserOBJThunk } from './redux/UsersReducers/employeeUser';
import { postAllOrders as postAllOrdersThunk } from './redux/HandleOrdersReducers/allOrders';
import { useEffect, useState } from 'react';
import { postAllProducts as postAllProductsThunk } from './redux/ItemsReducers/allProducts';
import axios from 'axios';
import NavbarMenu from './components/NavbarApp/navbarMenu';
import DashBoard from './Dashboard/dashBoard';
import { postFullOrderRest as postFullOrderRestThunk } from './redux/HandleOrdersReducers/fullOrderRest';
import { listLocalS } from './redux/UsersReducers/staffList';
import { postBusiness as postBusinessThunk } from './redux/ItemsReducers/business';
import lettuce from './Images/lettuce.png';
function App() {
  const employeeUser = useSelector((state) => state.employeeUser);
  const fullOrders = useSelector((state) => state.fullOrders);
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const allOrders = useSelector((state) => state.allOrders);
  const allProducts = useSelector((state) => state.allProducts);
  const business = useSelector((state) => state.business);
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.localStorage.getItem('staffList')) {
      dispatch(
        listLocalS(JSON.parse(window.localStorage.getItem('staffList')))
      );
      console.log(JSON.parse(window.localStorage.getItem('staffList')));
    }
  }, []);
  useEffect(() => {
    dispatch(postItemsInOrdersThunk());
    dispatch(postEmployeeUserOBJThunk());
    dispatch(postFullOrderRestThunk());
    dispatch(postAllOrdersThunk());
    dispatch(postAllProductsThunk());
    dispatch(postBusinessThunk());
    {
      //Local Storage
      /*{
        const localAllOrders = JSON.parse(
          window.localStorage.getItem('allOrders')
        );
        dispatch(setObjAllOrdersAction(Object.assign(localAllOrders.obj)));
        //________________________
        const localEmployeeUser = JSON.parse(
          window.localStorage.getItem('employeeUser')
        );
        dispatch(
          setObjEmployeeUserAction(Object.assign(localEmployeeUser.obj))
        );
        //________________________
        const localFullOrder = JSON.parse(
          window.localStorage.getItem('fullOrder')
        );
        dispatch(setObjFullOrderAction(Object.assign(localFullOrder.obj)));
        //________________________
        const localItemsInOrder = JSON.parse(
          window.localStorage.getItem('itemsInOrder')
        );
        dispatch(
          setObjItemsInOrderAction(Object.assign(localItemsInOrder.obj))
        );
      }
    };
    
    
    useEffect(() => {
    if (window.localStorage.getItem('staffList')) {
      dispatch(
        listLocalS(JSON.parse(window.localStorage.getItem('staffList')))
      );
      console.log(JSON.parse(window.localStorage.getItem('staffList')));
    }
  }, []);
    */
    }
  }, [dispatch]);
  return (
    <div className="Home">
      <div className="body">
        <NavBarApp />
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
