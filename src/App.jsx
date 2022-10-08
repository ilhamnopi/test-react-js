import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from "@tabler/icons";
import clsx from "clsx";
export default function App() {
  return (
    <div className="bg-slate-900 grid place-content-center min-h-screen">
      <div className="flex gap-x-2">
        <Button {...{ onClick: () => console.log("here i am") }}>
          <IconBrandTwitter></IconBrandTwitter> Login
        </Button>
        <Button className="bg-black" type="submit">
          <IconBrandGithub></IconBrandGithub> Login
        </Button>
        <Button className="bg-blue-400" type="submit">
          <IconBrandFacebook></IconBrandFacebook> Login
        </Button>
      </div>
    </div>
  );
}

function Button(props) {
  const { className = "bg-blue-600", text, children, type = "submit" } = props;
  return (
    <button {...props} type={type} className={clsx(className, "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 text-white px-4 py-2 rounded flex flex-items-center gap-x-2")}>
      {text || children}
    </button>
  );
}
