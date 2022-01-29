import { setObj as setObjFullOrderAction } from '../redux/fullOrderClient';
import { setObj as setObjEmployeeUserAction } from '../redux/employeeUser';
import { setObj as setObjAllOrdersAction } from '../redux/allOrders';
import { setObj as setObjItemsInOrderAction } from '../redux/itemsInOrder';

export const AllImports = {
  setObjFullOrderAction: setObjFullOrderAction,
  setObjEmployeeUserAction: setObjEmployeeUserAction,
  setObjAllOrdersAction: setObjAllOrdersAction,
  setObjItemsInOrderAction: setObjItemsInOrderAction,
};

export default AllImports;
