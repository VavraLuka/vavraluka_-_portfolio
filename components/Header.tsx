import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import ModeToggleSwitch from "./modeToggleSwitch";
import Image from "next/image"

type Props = {}

const changeLanguage = (ln: string) => {
  return () => {
    i18n.changeLanguage(ln);
  }
}

export default function Header({ }: Props) {
  const { t, i18n } = useTranslation();

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          delay: 3,
          duration: 1,
          ease: "easeOut"
        }}
        className="flex flex-row items-center">
        <SocialIcon className="hover:bg-[#e5004e]/40 transition-all duration-150"
          url="https://www.linkedin.com/in/lukavavra/"
          fgColor="gray"
          bgColor="transparent" />
        <SocialIcon className="hover:bg-[#e5004e]/40 transition-all duration-150"
          url="https://www.facebook.com/luka.vavra/"
          fgColor="gray"
          bgColor="transparent" />
        <SocialIcon className="hover:bg-[#e5004e]/40 transition-all duration-150"
          url="https://www.instagram.com/de_lv_sign/"
          fgColor="gray"
          bgColor="transparent" />
      </motion.div>

      <motion.div
        initial={{
          y: -100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          delay: 3.5,
          duration: 0.5,
          ease: "easeOut"
        }}
        className="flex flex-row opacity-60 absolute left-[50%] w-[200px] -ml-[100px] justify-center text-gray-400 gap-3">
        <button onClick={changeLanguage("en")} className="opacity-50 hover:opacity-100 transition-all duration-150"><Image src="/english.png" width="35" height="35" /></button>
        <button onClick={changeLanguage("hr")} className="opacity-50 hover:opacity-100 transition-all duration-150"><Image src="/croatian.png" width="35" height="35" /></button>
      </motion.div>
      <div className="flex flex-row gap-3">
        <Link href="#contact">
          <motion.div
            initial={{
              x: 500,
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              delay: 3,
              duration: 1,
              ease: "easeOut"
            }}
            className="flex flex-row items-center text-gray-400 cursor-pointer hover:bg-[#e5004e]/40 transition-all duration-150 pr-5">
            <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">{t('contact')}</p>
          </motion.div>
        </Link>
        {/* <ModeToggleSwitch /> */}
      </div>
    </header>
  );
};