/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-02-08
 * @desc [This is a Tool for handling changes of input values ]
 */
import { useState } from "react";

function useInput(initVal) {
  const [item, setItem] = useState(initVal);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleReset = () => {
    setItem("");
  };

  return [item, handleChange, handleReset];
}
export default useInput;
