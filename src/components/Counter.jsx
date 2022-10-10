import Button from "./Button";
import { useState } from "react";

export default function Counter({ initialValue }) {
  const [count, setcount] = useState(initialValue);
  function handleClick() {
    setcount((prevState) => prevState + 1);
  }
  return (
    <div>
      <h1 className="text-5xl font-bold">{count}</h1>
      <div className="mt-5 flex justify-center gap-2">
        <Button onClick={handleClick}>+1</Button>
        <Button
          onClick={() => {
            handleClick();
            handleClick();
            handleClick();
          }}
        >
          +3
        </Button>
      </div>
    </div>
  );
}
