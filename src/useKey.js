import { useEffect } from "react";

///abstractizeaza adaugarea si stergerea unui eventhandler pentru keypress
export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.key.toLowerCase() === key.toLowerCase()) action();
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action],
  );
}
