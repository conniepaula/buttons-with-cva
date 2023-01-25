import { cva, type VariantProps } from "cva";

// export type ButtonProps = VariantProps<typeof button>;

export const button = cva("text-md px-6 py-3 rounded-full uppercase", {
  variants: {
    intent: {
      primary:
        "bg-violet-400 hover:bg-violet-300 focus:outline-none focus:border-2 focus:border-violet-200 disabled:bg-gray-500",
      secondary:
        "bg-rose-400 hover:bg-rose-300 focus:outline-none focus:border-2 focus:border-rose-200 disabled:bg-slate-500",
      tertiary:
        "bg-green-400 hover:bg-green-300 focus:outline-none focus:border-2 focus:border-green-200 disabled:bg-slate-500",
      cursor:
        "bg-blue-400 hover:bg-blue-300 focus:outline-none focus:border-2 focus:border-blue-200 disabled:bg-slate-500",
    },
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  children,
  ...props
}) => (
  <button className={button({ intent, className })} {...props}>
    {children}
  </button>
);
