// import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from "@tabler/icons";

import Button from "./components/Button";
import Counter from "./components/Counter";
import PlaceContentCenter from "./components/PlaceContentCenter";
function App() {
  return (
    <PlaceContentCenter>
      <Counter initialValue={10}></Counter>
    </PlaceContentCenter>
  );
}

export default App;
