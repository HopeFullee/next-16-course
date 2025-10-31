import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Title = ({ children, ...rest }: Props) => {
  return (
    <h1
      {...rest}
      className={
        "text-6xl font-semibold text-gradient max-sm:text-4xl " + rest.className
      }
    >
      {children}
    </h1>
  );
};
