import PlaceContentCenter from "./PlaceContentCenter";
import Input from "./input";
import Button from "./Button";
import { useEffect, useState } from "react";
const UseEffect = () => {
  //
  const [name, setName] = useState("");
  const [online, setOnline] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scroll);

  function updateScrollPostion() {
    const windowScrolling = window.scrollY;
    console.log(`window scroll position: ${windowScrolling}`);
    setScrollPosition(windowScrolling);
  }
  /*
Use effect dipanggil pertama kali pada saat aplikasi di render
berikut fungsi dari masing" useEffect
*/
  // 1 Use Effect yang selalu di render
  useEffect(() => {
    // console.log("i always rendered");
  });
  // 2 Use Effect yang hanya di render 1 x pada saat baru di render
  useEffect(() => {
    console.log("Only one to render");
  }, []);
  // 3 akan di render apabila setiap state-nya kita ubah
  useEffect(() => {
    console.log(`I am now ${online ? "Online" : "Offline"}`);
  }, [online]);
  // 4 clean up useEffect

  function onKeyDown(e) {}

  useEffect(() => {
    console.log("Attaching");
    window.addEventListener("scroll", updateScrollPostion);
    // window.addEventListener("keydown", onKeyDown);
    // return () => {
    //   window.removeEventListener("keydown", onKeyDown);
    // };
  }, []);

  //
  return (
    <div className="h-[4000px] p-8">
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={() => setOnline((online) => !online)}>Set Status</Button>
    </div>
  );
};

export default UseEffect;
