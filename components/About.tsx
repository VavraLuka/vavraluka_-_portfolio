import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import luka02 from "/components/images/luka02.jpg";
import luka02rose from "/components/images/luka02rose.png";
import { useTranslation } from "react-i18next";

type Props = {};

export default function About({}: Props) {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        {t("aboutMe")}
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileInView={{ x: 0, opacity: 1 }}
        className="-mb-40 md:-mb-20 xl:-mb-28 mt-18 mr-5"
      >
        <div className="hidden md:block xl:block md:w-[520px] md:h-[360px] xl:w-[620px] xl:h-[440px] relative z-10">
          <Image
            src={luka02rose}
            alt="Luka Vavra"
            layout="fill"
            objectFit="cover"
            quality="100"
            priority
          />
        </div>
        <div className="display-block md:hidden xl:hidden w-[460px] h-[350px] relative z-10">
          <Image
            src={luka02}
            alt="Luka Vavra"
            layout="fill"
            objectFit="cover"
            quality="100"
            priority
          />
        </div>
      </motion.div>
      <div className="z-10 space-y-10 px-0 py-12 md:py-0 xl:py-0 md:px-10 md:p-0 xl:p-14 w-[100%] h-[30%]">
        <motion.h4
          initial={{
            x: 250,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-4xl font-semibold"
        >
          {t("aboutMeTitle01")}{" "}
          <span className="underline decoration-[#e5004e]/70">
            {t("aboutMeTitle02")}
          </span>{" "}
          {t("aboutMeTitle03")}
        </motion.h4>
        <motion.div
          initial={{
            x: 250,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
            duration: 1,
            ease: "easeOut",
          }}
          className="w-10 h-1 mx-auto md:mx-0 bg-[#e5004e]/70"
        ></motion.div>
        <motion.p
          initial={{
            x: 250,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="text-base"
        >
          {t("aboutMeText")}
        </motion.p>
      </div>
    </motion.div>
  );
}
