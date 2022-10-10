function Card({ title, body, footer, children }) {
  return <div className="shadow rounded-lg overflow-hidden bg-white w-full">{children}</div>;
}

function Title({ children }) {
  return (
    <div className=" border-b p-4">
      <h1 className="text-xl text-black">{children}</h1>
    </div>
  );
}

function Footer({ children }) {
  return <div className="bg-slate-50 p-4">{children}</div>;
}
function Body({ children }) {
  return <div className="leading-relaxed p-4">{children}</div>;
}
Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;
export default Card;
