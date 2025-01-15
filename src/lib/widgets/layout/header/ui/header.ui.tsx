import { cn } from "@/shared/utils";

type Props = PropsWithChildren & {
  containerClass?: string;
};

export const Header: React.FC<Props> = ({ containerClass = "", children }) => {
  return (
    <header className="min-h-[80px]">
      <div
        className={cn(
          "container flex items-center justify-between gap-4",
          containerClass
        )}
      >
        <div className="flex gap-1 items-center text-2xl">
          <span className="text-green-600 font-bold">Vitalii</span>
          <span>Verdiiev</span>
        </div>
        {children}
      </div>
    </header>
  );
};
