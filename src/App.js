import './CSS/App.css';
import AllRoutes from './pages/routingAppPages';
import NavBarApp from './components/NavbarApp/navbarApp';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsInOrders as fetchItemsInOrdersThunk } from './redux/itemsInOrder';
import { postEmployeeUser as postEmployeeUserThunk } from './redux/employeeUser';
import { postFullOrder as postFullOrderThunk } from './redux/fullOrderClient';
import { postAllOrders as postAllOrdersThunk } from './redux/allOrders';
import { useEffect } from 'react';
import axios from 'axios';
import NavbarMenu from './components/NavbarApp/navbarMenu';
function App() {
  const employeeUser = useSelector((state) => state.employeeUser);
  const fullOrder = useSelector((state) => state.fullOrder);
  const itemsInOrder = useSelector((state) => state.itemsInOrder);
  const allOrders = useSelector((state) => state.allOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemsInOrdersThunk());
    dispatch(postEmployeeUserThunk());
    dispatch(postFullOrderThunk());
    dispatch(postAllOrdersThunk());
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
    return () => {};
  }, [dispatch]);
  return (
    <div className="App">
      <NavBarApp />
      <AllRoutes />
    </div>
  );
}

export default App;
