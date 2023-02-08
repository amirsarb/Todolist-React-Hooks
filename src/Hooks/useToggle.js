/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-02-08
 * @desc [This is a Tool for toggling the state of items ]
 */
import { useState } from "react";

function useToggle(initVal) {
  const [item, setItem] = useState(initVal);

  const toggle = () => {
    setItem(!item);
  };

  return [item, toggle];
}

export default useToggle;
