import { NavigationMenu } from "@/pages/resume/ui/sidebar/navigation-menu";
import { fetchResumeData } from "./page";
import { cloneElement } from "react";

export default function ResumeLayout({ children }: PropsWithChildren) {
  const resume = fetchResumeData();
  
  return (
    <main className="container grid grid-cols-[200px_1fr]">
      <aside>
        <NavigationMenu />
      </aside>
      {cloneElement(children, { resume })}
    </main>
  );
}
