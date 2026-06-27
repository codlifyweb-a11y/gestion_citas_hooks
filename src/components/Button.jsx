const variantStyles = {
  primary:
    "text-white bg-sky-600 border border-transparent hover:bg-sky-700 focus:ring-sky-400",
  secondary:
    "text-slate-800 bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:text-slate-900 focus:ring-slate-400",
  danger:
    "text-white bg-red-600 border border-transparent hover:bg-red-700 focus:ring-red-400",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variantClass = variantStyles[variant] ?? variantStyles.primary;
  const baseClass =
    "box-border shadow-sm font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none focus:ring-4";

  return (
    <button
      type="button"
      className={`${baseClass} ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
