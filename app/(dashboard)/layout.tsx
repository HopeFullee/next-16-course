import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <p>Dashboard Layout</p>
    </div>
  );
};

export default Layout;
