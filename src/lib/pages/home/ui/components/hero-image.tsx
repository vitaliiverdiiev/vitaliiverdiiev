import Image from "next/image";

export const HeroImage = () => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <Image
        // className={"w-[80%] rounded-[49%_51%_43%_57%_/_50%_50%_50%_50%]"}
        alt="Amigos: My friend and I"
        src="/amigos.jpg"
        width={500}
        height={500}
        priority={true}
      />
    </div>
  );
};
