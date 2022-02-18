import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import itemsInOrder from './ItemsReducers/itemsInOrder';
import employeeUserReducer from './UsersReducers/employeeUser';
import allOrdersReducer from './HandleOrdersReducers/allOrders';
import {
  localStorageMiddleware,
  reHydrateStore,
} from './Middleware/LocalStorage';
import userSlice from './UsersReducers/userConnent';
import staffListSlice from './UsersReducers/staffList';
import allProductsReducer from './ItemsReducers/allProducts';
import fullOrderRestReducer from './HandleOrdersReducers/fullOrderRest';
import businessReducer from './ItemsReducers/business';
import onlineOrdersFromClientWab from './HandleOrdersReducers/onlineOrdersFromClientWab';
export const store = configureStore({
  reducer: {
    itemsInOrder: itemsInOrder,
    employeeUser: employeeUserReducer,
    allOrders: allOrdersReducer,
    userConnect: userSlice,
    staffList: staffListSlice,
    allProducts: allProductsReducer,
    fullOrderRest: fullOrderRestReducer,
    business: businessReducer,
    onlineOrdersClient: onlineOrdersFromClientWab,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
