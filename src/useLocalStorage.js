import { useEffect, useState } from "react";

export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue === null) return initialState;
    return storedValue;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );
  return [value, setValue];
}
