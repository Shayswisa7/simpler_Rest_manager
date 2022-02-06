import './CSS/App.css';
import AllRoutes from './pages/RoutingApp/routingAppPages';
import NavBarApp from './components/NavbarApp/navbarApp';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsInOrders as fetchItemsInOrdersThunk } from './redux/itemsInOrder';
import { postEmployeeUserOBJ as postEmployeeUserOBJThunk } from './redux/employeeUser';
import { postFullOrder as postFullOrderThunk } from './redux/fullOrderClient';
import { postAllOrders as postAllOrdersThunk } from './redux/allOrders';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarMenu from './components/NavbarApp/navbarMenu';
import DashBoard from './Dashboard/dashBoard';
import { postAllProducts as postAllProductsThunk } from './redux/allProducts';
function App() {
  const employeeUser = useSelector((state) => state.employeeUser);
  const fullOrder = useSelector((state) => state.fullOrder);
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const allOrders = useSelector((state) => state.allOrders);
  const allProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  console.log(allProducts);
  useEffect(() => {
    dispatch(fetchItemsInOrdersThunk());
    dispatch(postEmployeeUserOBJThunk());
    dispatch(postFullOrderThunk());
    dispatch(postAllOrdersThunk());
    dispatch(postAllProductsThunk());
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
    };*/
    }
    return () => {};
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
