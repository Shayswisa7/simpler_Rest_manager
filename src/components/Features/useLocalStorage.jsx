import React, { useEffect, useState } from 'react';

const useLocalStorage = (key, initialState) => {
  const [value, setValue] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key) || initialState);
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
};
export default useLocalStorage;
