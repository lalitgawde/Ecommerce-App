import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const initialState = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialValue;

    return initialState;
  });

  return [value, setValue];
};

export default useLocalStorage;
