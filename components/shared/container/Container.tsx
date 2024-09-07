import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto flex h-full max-w-5xl flex-col ${className}`}>
      {children}
    </div>
  );
};

export default Container;
