//MIDDLEWARE
export const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const reducers = getState();
    for (let i in reducers) {
      localStorage.setItem(i, JSON.stringify(reducers[i]));
    }
    return result;
  };
};

export const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
  }
};
