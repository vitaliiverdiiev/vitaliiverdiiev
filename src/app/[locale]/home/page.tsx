"use client";

import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Home");
  const tActions = useTranslations("Actions");

  return (
    <section>
      <div className="container py-[136px] grid grid-cols-2 gap-10">
        <div>
          <p className="text-[24px] leading-[29px] mb-[10px] font-semibold">
            {t("greeting")}
          </p>
          <p className="text-[28px] leading-[34px] mb-[24px] font-bold">
            {t("name")}
          </p>
          <h1 className="text-[70px] leading-[84px] mb-[17px] font-black">
            {t("position")}
          </h1>
          <ul className="flex items-center gap-5 mb-[61px]">
            <li className="size-10 rounded-full bg-red-100" />
            <li className="size-10 rounded-full bg-red-100" />
            <li className="size-10 rounded-full bg-red-100" />
            <li className="size-10 rounded-full bg-red-100" />
            <li className="size-10 rounded-full bg-red-100" />
          </ul>
          <div className="flex items-center gap-6 mb-[80px]">
            <Button>{tActions("hire-me")}</Button>
            <Button variant="ghost">{tActions("download-resume")}</Button>
          </div>
          <div className="grid grid-cols-3 gap-6 bg-green-900 rounded-[10px]">
            <div className="flex flex-col p-6">
              <span
                className={"text-[24px] leading-[29px] mb-3 font-extrabold"}
              >
                5+
              </span>
              <span
                className={
                  "text-[24px] leading-[29px] font-bold text-orange-400"
                }
              >
                {t("achievements.experience")}
              </span>
            </div>

            <div className="flex flex-col p-6">
              <span
                className={"text-[24px] leading-[29px] mb-3 font-extrabold"}
              >
                16+
              </span>
              <span
                className={
                  "text-[24px] leading-[29px] font-bold text-orange-400"
                }
              >
                {t("achievements.projects")}
              </span>
            </div>
            <div className="flex flex-col p-6">
              <span
                className={"text-[24px] leading-[29px] mb-3 font-extrabold"}
              >
                12+
              </span>
              <span
                className={
                  "text-[24px] leading-[29px] font-bold text-orange-400"
                }
              >
                {t("achievements.ideas")}
              </span>
            </div>
          </div>
        </div>
        <div className="h-full flex items-start justify-center">
          <Image
            className={"w-[80%] rounded-[49%_51%_43%_57%_/_50%_50%_50%_50%]"}
            alt="Amigos: My friend and I"
            src="/amigos.jpg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
