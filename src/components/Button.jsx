import clsx from "clsx";
export default function Button(props) {
  const { className = "bg-black hover:bg-slate-900", text, children, type = "submit" } = props;
  return (
    <button {...props} type={type} className={clsx(className, "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 text-white px-4 py-2 rounded flex flex-items-center gap-x-2")}>
      {text || children}
    </button>
  );
}
