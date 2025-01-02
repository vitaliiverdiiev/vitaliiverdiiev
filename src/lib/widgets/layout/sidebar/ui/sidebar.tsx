import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const Sidebar: React.FC<Props> = ({ children }) => {
  return <aside className="sidebar overflow-auto">{children}</aside>;
};
