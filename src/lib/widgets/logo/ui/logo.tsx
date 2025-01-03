import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="group transition duration-300">
      <span className="text-2xl font-bold logo flex h-full items-center">
        <span className="text-white h-full bg-brand-dark px-1">Vitalii</span>
        <span className={
          "relative after:bg-brand-dark after:absolute after:h-1 after:w-0 after:bottom-0 after:right-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer inline-block pl-0.5"
        }>Verdiiev
        </span>
      </span>
    </Link>
  );
};
