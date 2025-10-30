import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <p>root Layout</p>
    </div>
  );
};

export default Layout;
