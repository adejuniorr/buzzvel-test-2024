import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
};

export const Link = ({ children, href }: Props) => {
  return (
    <a href={href} className="font-medium text-blue flex gap-2 items-center">
      {children}
    </a>
  );
};
