import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <footer className="bg-red-100">c koko RICO</footer>
    </>
  );
}
