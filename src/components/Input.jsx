export default function Input({ type = "text", ...props }) {
  return <input {...props} type={type} className="rounded-lg border-slate-300 shadow-sm w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 transition duration-300" />;
}
