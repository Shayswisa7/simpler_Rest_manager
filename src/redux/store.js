import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import fullOrderReducer from './fullOrderClient';
import itemsInOrder from './itemsInOrder';
import employeeUserReducer from './employeeUser';
import allOrdersReducer from './allOrders';
import {
  localStorageMiddleware,
  reHydrateStore,
} from './Middleware/LocalStorage';

export const store = configureStore({
  reducer: {
    fullOrder: fullOrderReducer,
    itemsInOrder: itemsInOrder,
    employeeUser: employeeUserReducer,
    allOrders: allOrdersReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
