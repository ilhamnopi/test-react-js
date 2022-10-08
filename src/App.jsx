// import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from "@tabler/icons";
import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import PlaceContentCenter from "./components/PlaceContentCenter";
function App() {
  const [counter, setcount] = useState(0);

  function handleClick() {
    setcount((prevState) => prevState + 1);
  }
  return (
    <PlaceContentCenter>
      <h1 className="text-5xl font-bold">{counter}</h1>
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
    </PlaceContentCenter>
  );
}

export default App;
