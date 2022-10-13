// usin Useref
// import Useref from "./Useref";
// const Input = forwardRef(({ type = "text", className, ...props }, ref) => {
//   return <input ref={ref} {...props} type={type} className="rounded-lg border-slate-300 shadow-sm w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 transition duration-300" />;

import { useEffect, useRef } from "react";

// });
const Input = ({ isFocused = false, type = "text", className, ...props }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, []);
  return <input ref={inputRef} {...props} type={type} className="rounded-lg border-slate-300 shadow-sm w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 transition duration-300" />;
};

export default Input;
