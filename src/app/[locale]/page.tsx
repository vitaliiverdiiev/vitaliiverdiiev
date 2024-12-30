'use client';

import { Button } from "@nextui-org/react";

export default function Home() {

  return (
    <>
      <header className="bg-blue-100 h-[80px]">
        <div className="container bg-red-100"></div>
      </header>
      <aside className="p-4">
        <Button radius="md" color="success" className="text-white font-bold">Boolki!</Button>
      </aside>
    </>
  );
}
