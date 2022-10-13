import clsx from "clsx";

function Card({ className, title, body, footer, children }) {
  return <div className="shadow rounded-lg overflow-hidden bg-white w-full">{children}</div>;
}

function Title({ className, children }) {
  return (
    <div className=" border-b p-4">
      <h1 className={clsx(className, "text-xl text-black font-semibold")}>{children}</h1>
    </div>
  );
}

function Footer({ className, children }) {
  return <div className={clsx(className, "bg-slate-50 p-4")}>{children}</div>;
}
function Body({ className, children }) {
  return <div className={clsx(className, "leading-relaxed p-4")}>{children}</div>;
}
Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;
export default Card;
