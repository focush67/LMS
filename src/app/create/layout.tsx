import { LayoutProps } from "@/types/misc";
import React, { Suspense } from "react";

const CreationLayout = ({ children }: LayoutProps) => {
  return <div className="flex h-[100vh] pt-10 px-5">{children}</div>;
};

export default CreationLayout;
