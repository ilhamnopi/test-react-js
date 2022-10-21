import clsx from "clsx";
export default function Button(props) {
  const { className = "bg-blend-darken", text, children, type = "submit" } = props;
  return (
    <button
      {...props}
      type={type}
      className={clsx(className, "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1  text-white px-4 py-2 rounded h-10 whitespace-nowrap inline-flex justify-center flex-items-center gap-x-2 bg-black hover:bg-slate-800 transition duration-75")}
    >
      {text || children}
    </button>
  );
}
